# Fetch aviation weather

Script for loading aviation weather and showing data with-in a widgets using Scriptable app. Source of data is AWC (NOAA) at aviationweather.com.

The weather can currently be viewed using following sizes of widgets:

|                       | METAR | TAF | BOTH |
| --------------------- |:-----:|:---:|:----:|
| Lock screen rectangle |   X   |     |      |
| Small                 |   X   |     |      |
| Medium                |   X   |  X  |      |
| Large                 |   X   |  X  |  X   |
| Extra Large (iPadOS)  |   X   |  X  |  X   |

*Please note that although extra large widget is allowed (applicable for iPadOS only), the script is not optimised for it as of now.*


## Install

### Via ScriptDude

Installation via ScriptDude enables easy and flawless script installation, as well as tracking of any possible updates of the script (as soon as you run ScriptDude from time to time with-in the Scriptable app).

[![Download with ScriptDude](https://scriptdu.de/download.svg)](https://scriptdu.de?name=fetchAviationWeather&source=https%3A%2F%2Fraw.githubusercontent.com%2Fskippysworld%2FfetchAviationWeather%2Frefs%2Fheads%2Fmain%2FfetchAviationWeather.js&docs=https%3A%2F%2Fgithub.com%2Fskippysworld%2FfetchAviationWeather)

After clicking on button above, follow `Setup instructions` if you don't have Scriptable and/or ScriptDude installed, otherwise you can `Install` directly.

When installation is done, add a new Scriptable widget to your home screen.
Don't forget to select the script and pass a [parameter](#parameter) in widget's settings.

### Manually

Manual installation is possible, but does not allow automatic tracking of script's updates.

1. Download the Scriptable app.
2. Click on `+` icon to add a script (top right corner).
3. Copy / paste the code from [`fetchAviationWeather.js`](https://raw.githubusercontent.com/skippysworld/fetchAviationWeather/refs/heads/main/fetchAviationWeather.js) from this repository and confirm by clicking `Done`.
4. An `Untitled Script` shows up in Scriptable's list. You can rename it by long press or use in widget settings as it is.
5. Add a new Scriptable widget to your home screen.
6. In widget's settings, select a script and pass a [parameter](#parameter) to it.


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
