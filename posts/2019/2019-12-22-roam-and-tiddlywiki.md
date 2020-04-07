Date: 2019-12-22 11:17
Tags: Roam, TiddlyWiki, PKM
Icon: 🌀
Permalink: /2019/roam-and-tiddlywiki

# TiddlyWiki and Roam and my Daily Notes


A few notes about differences between TiddlyWiki and Roam related to my daily note taking process.

In October, 2018, I created a wiki at [rudimentarylathe.org](https://rudimentarylathe.org/) using the wonderful [TiddlyWiki](https://tiddlywiki.com/). Since then I've written just shy of 1,000 "tiddlers" there and it's been a totally pleasant experience.

The original intent of the wiki was to record notes about things or topics that interested me. I planned to keep notes on "Photography" or "Apple" or "Writing" or whatever. And while I do still create notes for topics, what ended up happening is that the whole thing turned into a sort of blog. The majority of new tiddlers were daily journal entries.

TiddlyWiki is amazing. Having everything in a single HTML file is simple and comforting and as future-proof as anything. It's flexible and extendible. It has been a great tool for keeping public notes.

And then, a few weeks ago, I learned about [Roam from Roam Research](https://roamresearch.com/).

I try pretty much every new note-taking tool I run into, so I created a private Roam database and started using it for random notes. Roam presents a "Daily Notes" page for today's date right off the bat, so that's where I enter notes by default. Notes in Roam are created as outlines (similar to [Workflowy](https://workflowy.com/)). I love outlines. I've used tools like [Tinderbox](https://eastgate.com/Tinderbox/) and [Orgmode](https://orgmode.org/) for years. I work best in outlines.

What happens when writing in Roam is that you link words with double square brackets. This is also how wikis like TiddlyWiki work, so that's not what makes Roam different. What makes Roam different is that simply linking a word with brackets automatically creates a page for that word or phrase. Most wikis I know of require me to specifically create a new page from a link if it doesn't exist. This is an important difference, because what Roam also does is include backlinks to each reference. Automatically. 

This means that I can just type notes wherever I happen to be in Roam and, by simply mentioning something, that note (and a link back) is included on the page being mentioned. Here's an example of the [[[TiddlyWiki](https://roamresearch.com/#/app/jackbaty/page/Tn_PHaMMj)]] page in my [public Roam database](https://roamresearch.com/#/app/jackbaty):


Notice that I haven't actually taken any notes about TiddlyWiki on that page. What the screenshot shows is that I've mentioned TiddlyWiki a bunch of times, and it creates the page automatically and shows each reference, in context, with links back to where the mention happened.

This. Is. Amazing!

I don't think most people realize how insanely valuable automatic backlinking is. Tools like TheBrain get it, which is why I've used TheBrain for years. Proper backlink handling pays dividends and Roam does it very well.

I can do backlinks in TiddlyWiki but not like this. It may be possible, but would require research and tweaking but Roam does it right out of the box.

![](/_img/2019/191222_roam-screen-1.png)

Notice also the "1 Unlinked Reference to 'TiddlyWiki'" line at the bottom. Roam tracks any use of the word and can show references those as well. There's also an option to automatically link those references with the click of a button.

Another way to reference content from one area to another is by using transclusion. In TiddlyWiki I can transclude the content from tiddler A in tiddler B and any changes made in A will automatically appear in B. This is a great way to collect small bits of information together. There are a couple of things about how TiddlyWiki handles transclusion that make it less useful to me.

The first is that there's no easy way to jump to the original, source tiddler. I frequently see a tiddler that I want to edit, and so I click "Edit" just to find that the content I want to change is actually transcluded from a different tiddler. In order to get there I have to search for the title of the original to find it, then I can edit that one. There's also no indication that content is being transcluded. This is fine, but I'd prefer transcluded content to be indicated as such.

The second issue with transclusion in TiddlyWiki is that if I rename the source tiddler, transclusion breaks, and there's nothing on the target tiddlers indicating anything is amiss. I've ended up with nearly empty tiddlers due to this.

Roam handles transclusion by showing the transcluded text in a different style. I can transclude just a single node on any page rather than the entire page. Roam shows a count of times a node has been transcluded and will display them in the sidebar by clicking a small button. Super handy.

Speaking of renaming, in TiddlyWiki, renaming a tiddler breaks existing links. It warns me about it, but I still need to fix references.

In Roam I can rename pages at will, without worrying about breaking links. This is huge because it completely removes any friction around naming things.

TiddlyWiki has all sorts of cool functions for collecting and manipulating notes. Roam doesn't expose anything like this yet, but I've seen hints of a pretty powerful set of tools just under the surface. I expect these tools to expand and become generally available at some point.

So what does all this mean? I'm not sure yet, but, as of today I'm putting all of my private notes and most of my public ones in Roam rather than in TiddlyWiki.

This is risky because Roam is quite new and TiddlyWiki has been around since 2004. Also, Roam is SaaS and TiddlyWiki is just an HTML file I can run locally, forever. There are privacy concerns to consider with Roam as well.

However, Roam feels like it will pay higher dividends than TiddlyWiki over the long term (assuming there is a long term). I prefer writing in outlines, and I love the way it handles backlinking and not worrying about naming things. Roam feels a little like using a modern spin on Orgmode in the browser.

Let's see where this goes. You can follow along in my public Roam database.

Update February 07, 2020: Keep an eye on TiddlyBlink, which aims to replicate many of Roams features.