# Fetch aviation weather 

Script for loading aviation weather and showing data with-in a widget using Scriptable app. Source of data is AWC (NOAA) at aviationweather.com.

The script is currently optimised for following sizes of widgets:
- small for METAR only
- medium for METAR **or** TAF
- large for METAR **and** TAF

## Installation 

### Via ScriptDude

Installing the script via ScriptDude allows automatic updates of the script.

1) Download the Scriptable app.
2) Copy ScriptDude installer from [Scriptdu.de](https://scriptdu.de/).
3) In Scriptable app, click on `+` icon to add a script (top right corner).
4) Paste copied code from clipboard and confirm by clicking `Done`.
4) Click on `Untitled Script`. After a moment a simple page should appear and show list of Installed scripts (currently ScriptDude only).
5) Click on `Install from URL`, fill in a name you would like to use, provide a source URL to `fetchAviationWeather.js` from this repository and click on `Install`
6) 

### Manual

Manual installation is possible and quicker, but does not allow for automatic updates of the script. 

1) Download the Scriptable app.
3) Click on `+` icon to add a script (top right corner).
4) Copy / paste the code from `fetchAviationWeather.js` in this repository and confirm by clicking `Done`.
4) An `Untitled Script` shows up in a list. You can rename or use in widget settings as it is.

## How to use



## Passing a parameter

Script accepts and parses a parameter passed to the widget.
This is done in settings of the widget itself (from iOS screen).

### Parameter format (not case-sensitive):

```
type station
```

### Options:

- type - METAR / TAF / BOTH
- station - ICAO ID, eg: "LKPR"

### Examples:

```
metar lkpr
```

```
Taf LKPR
```