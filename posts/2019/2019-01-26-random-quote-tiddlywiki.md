Date: 2019-01-26 11:30
Tags: tiddlywiki
Permalink: /2019/displaying-a-random-quote-in-tiddlywiki

# Displaying a random quote in TiddlyWiki

Oh goodie, another post about [TiddlyWiki](https://tiddlywiki.com)[^block].

There was a [recent thread on Micro.blog](https://micro.blog/canion/2028825) about surfacing older content in order to find things that might have otherwise been forgotten. I love this idea, so I added a [Random Quote](https://rudimentarylathe.org/#Random%20Quote) tiddler to my [wiki](https://rudimentarylathe.org). Here's how I did it.

Installed [Matt's 'Shuffle Operator' plugin](https://mklauber.github.io/tw5-plugins/#Shuffle%20Operator)[^install]

Then, I created a new tiddler, [Random Quote](https://rudimentarylathe.org/#Random%20Quote), to display the random quote.

Last, I added the following to the Random Quote tiddler:

```
<$list filter="[tag[Quote]shuffle<now>limit[1]]">

	{ {!!text} }

</$list>
```

(Remove the space between sets of curly braces, those are there so they render correctly here)

That's it! Now the Random Quote tiddler will display a single, (relatively) random tiddler selected from all tiddlers tagged with "Quote", although any [Filter expression](https://tiddlywiki.com/#Filters) could be used to determine the list of tiddlers to pull from.


[^block]: Those of you not interested in TiddlyWiki might consider blocking or unfollowing me while I get this out of my system.
[^install]: A cool thing about TiddlyWiki is that to install a plugin, you just drag-and-drop a link into your wiki and reload. Could not be easier.