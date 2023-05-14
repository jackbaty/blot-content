---
Date: 2023-04-29 09:41
Tags: Workflow, DEVONthink 
Link: /2023/adding-weather-to-dtp-journals
---

# Adding weather info to DEVONthink's daily journals

Since I use [DEVONthink Pro](https://devontechnologies.com/apps/devonthink) (DTP) to index and store my notes and documents, I sometimes revisit the idea of using it to _create_ notes.

DTP includes a variety of built-in scripts for creating new content. These are mostly written in AppleScript. I was interested in the "Daily Journal" template. By default, running the Daily Journal template would create a new Markdown document containing a random quote and a list of the 4 latest headlines from the New York Times website. I was OK with the headlines, but I didn't feel the quote was necessary, so I replaced it with the current weather.

This turned out to be simple. I edited the existing script and added a `getWeather()` function:

```applescript
on getWeather()
	tell application id "DNtp"
		try
			set theWeather to download markup from "https://wttr.in/90210?0q&format=%c+%C+%t"
		end try
		return theWeather
	end tell
end getWeather

```

The script calls the [wttr.in](https://wttr.in) weather website using a few parameters and that's it. Here's what it looks like here today:

⛅️  Partly cloudy +53°F

Then, I replaced the random quote bits in the script so that it now reads[^1]:

```applescript 
set theWeather to my getWeather()
set myNews to my getNews()
set theContent to "# " & theHeadline & return & theWeather & return & return & "# Headlines" & return & return
...
```

I'm not sure I'll continue to use DTP for daily journals, but it's nice that I can tweak it if needed.


[^1]: I've put a copy of my version of the script [here](https://gist.github.com/jackbaty/b1f4d8284221279dafbf184c695295d1)