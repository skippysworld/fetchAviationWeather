// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: plane;
//-----------------------------------------
//
// Fetch aviation weather from AWC (NOAA) at aviationweather.com.
// Script takes and parse a parameter passed to the widget.
//
// Parameter format (not case-sensitive):
//
//		"type station"
//
// Options:
//
//		type - METAR / TAF / BOTH
//		station - ICAO ID, eg: "LKPR"
//
// Example:
//
//		"metar lkpr", "Taf LKPR"
//
//------------------------------------------

let encodeParam = args.widgetParameter || "noparam";
const decodeParam = encodeParam.toLowerCase().split(" ");

const type = decodeParam[0];
const station = decodeParam[1] || "nostation";

const errorMessage = {
	noParam: "Parameter missing in widget's settings.",
	wrongParam: "Wrong weather type in parameter.",
	fetchError: `An error has occured while fetching the data.

Possible causes includes internet connection issues, wrong/missing ICAO code in parameter or observed weather/forecast is not being issued for selected ICAO code.`,
	smallWidget:
		"Please use a bigger widget size in order to ensure satisfiable rendering of choosen weather type.",
};

async function fetchData() {
	const fetchUrl = `https://aviationweather.gov/api/data/metar?ids=${station}&format=geojson&taf=true`;

	const req = new Request(fetchUrl);
	return await req.loadJSON();
}

const apiData = await fetchData();
const metar = () => {
	try {
		return apiData.features[1].properties.rawOb;
	} catch {
		return errorMessage.fetchError;
	}
};
const taf = () => {
	try {
		return apiData.features[1].properties.rawTaf;
	} catch {
		return errorMessage.fetchError;
	}
};
const category = () => {
	try {
		return apiData.features[1].properties.fltcat.toUpperCase();
	} catch {
		return "";
	}
};

function formatTaf() {
	const regex = /\b(FM|BECMG|TEMPO|PROB.0|RMK)\b/gi;
	const splitTaf = taf().split(regex);
	let resultTaf = "";

	for (const part of splitTaf) {
		if (part.match(regex)) {
			resultTaf += "\n       " + part;
		} else {
			resultTaf += part;
		}
	}
	return resultTaf;
}

async function createWidget() {
	let widget = new ListWidget();

	widget.backgroundColor = new Color("1E1E1E");

	let stackTop = widget.addStack();

	if (config.widgetFamily === "accessoryRectangular") {
		stackTop.addImage(SFSymbol.named("airplane").image).imageSize = new Size(
			10,
			10
		);
		stackTop.addSpacer(5);
	} else {
		widget.setPadding(20, 20, 20, 20);
		stackTop.addImage(SFSymbol.named("airplane").image).imageSize = new Size(
			15,
			15
		);
		stackTop.addSpacer(10);
	}

	let title = "";
	let title2 = "";
	let badge = "";
	let body = "";
	let body2 = "";

	if (type === "metar") {
		title = stackTop.addText(type.toUpperCase());

		stackTop.addSpacer();

		badge = stackTop.addText(category());

		if (config.widgetFamily === "accessoryRectangular") {
			widget.addSpacer(5);
		} else {
			widget.addSpacer(10);
			widget.addSpacer();
		}

		body = widget.addText(metar());

		if (config.widgetFamily !== "accessoryRectangular") {
			widget.addSpacer();
		}
	} else if (type === "taf") {
		if (
			config.widgetFamily === "medium" ||
			config.widgetFamily === "large" ||
			config.widgetFamily === "extraLarge"
		) {
			title = stackTop.addText(type.toUpperCase());

			stackTop.addSpacer();

			widget.addSpacer(10);
			widget.addSpacer();

			body = widget.addText(formatTaf());

			widget.addSpacer();
		} else {
			title = stackTop.addText(type.toUpperCase());

			stackTop.addSpacer();

			widget.addSpacer(10);
			widget.addSpacer();

			body = widget.addText(errorMessage.smallWidget);

			widget.addSpacer();
		}
	} else if (type === "both") {
		if (
			config.widgetFamily === "large" ||
			config.widgetFamily === "extraLarge"
		) {
			title = stackTop.addText("METAR");

			stackTop.addSpacer();

			badge = stackTop.addText(category());

			widget.addSpacer(10);
			widget.addSpacer();

			body = widget.addText(metar());

			widget.addSpacer();
			widget.addSpacer(20);

			let stackTop2 = widget.addStack();
			stackTop2.addImage(SFSymbol.named("airplane").image).imageSize = new Size(
				15,
				15
			);

			stackTop2.addSpacer(10);

			title2 = stackTop2.addText("TAF");

			widget.addSpacer(10);
			widget.addSpacer();

			body2 = widget.addText(formatTaf());

			widget.addSpacer();
		} else {
			title = stackTop.addText(type.toUpperCase());

			stackTop.addSpacer();

			widget.addSpacer(10);
			widget.addSpacer();

			body = widget.addText(errorMessage.smallWidget);

			widget.addSpacer();
		}
	} else {
		title = stackTop.addText("Fetch Aviation Weather");

		widget.addSpacer(10);
		widget.addSpacer();
		if (type === "noparam") {
			body = widget.addText(errorMessage.noParam);
		} else {
			body = widget.addText(errorMessage.wrongParam);
		}

		widget.addSpacer();
	}

	title.textColor = Color.white();
	title2.textColor = Color.white();
	body.textColor = Color.white();
	body2.textColor = Color.white();

	title.textOpacity = 0.7;
	title2.textOpacity = 0.7;

	switch (config.widgetFamily) {
		case "accessoryRectangular":
			title.font = Font.mediumSystemFont(10);
			badge.font = Font.boldSystemFont(10);
			body.font = Font.systemFont(10);
			break;
		default:
			title.font = Font.mediumSystemFont(13);
			title2.font = Font.mediumSystemFont(13);
			badge.font = Font.boldSystemFont(13);
			body.font = Font.systemFont(12);
			body2.font = Font.systemFont(12);
	}

	switch (category()) {
		case "VFR":
			badge.textColor = new Color("66FF00");
			break;
		case "MVFR":
			badge.textColor = new Color("0070FF");
			break;
		case "IFR":
			badge.textColor = new Color("FF0000");
			break;
		case "LIFR":
			badge.textColor = new Color("FF00FF");
			break;
		default:
			badge.textColor = new Color("FFFFFF");
	}
	return widget;
}

const widget = await createWidget();

if (config.runsInWidget) {
	Script.setWidget(widget);
} else {
	widget.presentLarge();
}

Script.complete();
