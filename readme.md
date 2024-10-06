# Fetch aviation weather

Script for loading aviation weather and showing data with-in a widget using Scriptable app. Source of data is AWC (NOAA) at aviationweather.com.

The script is currently optimised for following sizes of widgets:

- small / square - METAR only
- medium / rectangle - METAR **or** TAF
- large / big square - METAR **and** TAF

## Install

### Via ScriptDude

Installing the script via ScriptDude allows automatic updates of the script.

[![Download with ScriptDude](https://scriptdu.de/download.svg)](https://scriptdu.de?name=fetchAviationWeather&source=https%3A%2F%2Fraw.githubusercontent.com%2Fskippysworld%2FfetchAviationWeather%2Frefs%2Fheads%2Fmain%2FfetchAviationWeather.js&docs=https%3A%2F%2Fgithub.com%2Fskippysworld%2FfetchAviationWeather)

After clicking on button above, follow `Setup instructions` if you don't have Scriptable and/or ScriptDude installed, otherwise you can `Install` directly.

When setup is done, add a new Scriptable widget to your home screen.
In widget settings, select a script and pass a [parameter](#parameter) to it.

### Manually

Manual installation is possible, but does not allow for automatic updates of the script.

1. Download the Scriptable app.
2. Click on `+` icon to add a script (top right corner).
3. Copy / paste the code from [`fetchAviationWeather.js`](https://raw.githubusercontent.com/skippysworld/fetchAviationWeather/refs/heads/main/fetchAviationWeather.js) in this repository and confirm by clicking `Done`.
4. An `Untitled Script` shows up in Scriptable list. You can rename or use in widget settings as it is.
5. Add a new Scriptable widget to your home screen.
6. In widget settings, select a script and pass a [parameter](#parameter) to it.

## Parameter

Passing a parameter to the widget is a crucial part of making the widget work for us.
By that, we are telling the specific widget what data from which station we want to show.

### Format (not case-sensitive):

```
type station
```

### Options:

Type - `METAR` or `TAF` or `BOTH`.

Station - ICAO code of the station, eg: `KJFK`.

### Examples:

```
metar kjfk
```

```
Taf KJFK
```
