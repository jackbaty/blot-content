Date: 2019-02-05 19:40
Tags: tiddlywiki
Permalink: /2019/displaying-recent-entry-in-tiddlywiki
title: Displaying the most recent Journal entry in TiddlyWiki

# Displaying the most recent Journal entry in TiddlyWiki

I've been using a `Pinned` tag as a way to keep my latest Journal entry visible in the story list. It works, but requires that I add the tag to each new Journal entry and delete the tag from prior entries.

I created a new "Most Recent Journal" tiddler and added the following as its text:

```
<$list filter="[tag[Journal]sort[created]last[]]">
<h2>Journal for <$view field="created" format="date" template="DDD DDth MMM YYYY"/></h2>
<$transclude  mode="block"/>

<small><$link>Open</$link></small>
</$list>
```

That's way better. The new tiddler will always show (transclude) the correct Journal entry without me doing anything special. [Here's what it looks like](https://rudimentarylathe.org/#Most%20Recent%20Journal).

[Stolen from this thread](https://groups.google.com/d/msg/TiddlyWiki/wClpc1cL00o/GSVtogNXAgAJ).
