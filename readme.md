# Fetch aviation weather

Script for loading aviation weather and showing data with-in a widget using Scriptable app. Source of data is AWC (NOAA) at aviationweather.com.

The script is currently optimised for following sizes of widgets:

- small / square - METAR only
- medium / rectangle - METAR **or** TAF
- large / big square - METAR **and** TAF

## Install

### Via ScriptDude

Installing the script via ScriptDude allows automatic updates of the script.

1. Download the Scriptable app.
2. Copy ScriptDude installer from [ScriptDude](https://scriptdu.de/).
3. In Scriptable app, click on `+` icon to add a script (top right corner).
4. Paste copied code from clipboard and confirm by clicking `Done`.
5. Click on `Untitled Script`. After a moment a simple page should appear and show list of Installed scripts (currently ScriptDude only).
6. Click on `Install from URL`, fill in a name you would like to use, provide a source URL to RAW file [`fetchAviationWeather.js`](https://raw.githubusercontent.com/skippysworld/fetchAviationWeather/refs/heads/main/fetchAviationWeather.js) from this repository and click on `Install`. The script will appear in ScriptDude's list as well as in Scriptable app itself.
7. Add a new Scriptable widget to your home screen
8. In widget settings, select a script and pass a [parameter](#parameter) to it.

### Manually

Manual installation is possible and quicker, but does not allow for automatic updates of the script.

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

Type - `METAR` or `TAF` or `BOTH`
Station - ICAO code of the station, eg: `KJFK`

### Examples:

```
metar kjfk
```

```
Taf KJFK
```
