---
Date: 2023-03-16 07:41
Tags: Emacs
Link: /2023/back-to-org-roam
---

# Back to Org-roam (from Denote)

Using both [Org-roam](https://www.orgroam.com/) and [Denote](https://protesilaos.com/emacs/denote) for my notes is not sustainable. I had to make a call one way or the other.

I went with Org-roam.

This is a bit disappointing because I prefer the _philosophy_ of Denote. I like that Denote is agnostic about file types (I can mix and match Markdown and Org-mode files, for example). I like that it forces a consistent file naming scheme. I like that it doesn’t depend on Org-mode features or any other complex dependencies. I like that it doesn’t try to do too much, but is easily extensible. Plus, I’m not trying to build some sort of zettelkasten or anything, so simple is preferable.

But, I keep finding things in Org-roam that I “need”. I use aliases all the time. I like to use several tags on a file, but don’t want them all in the file name. I like the full-featured daily notes functions. I like the ability to extract a heading out to a new roam file. Or I can use org-roam-refile to move a heading to another file in the Org-roam directory. I’m sure I could find ways to handle some of these things in Denote, but with Org-roam I get them out of the box.

What I really like in Org-roam, and have come to rely on, is the ability to have individual Org headings become their own independent roam nodes. For a while, I thought this added unnecessary complexity, but it turns out to be super useful. For example, I have a books.org file, with each book as its own heading. (See [Book logging in Emacs](https://baty.net/2022/book-logging-in-emacs)). Since moving this file into Org-roam, I’ve turned each book’s heading into its own node, making it easier to search for a book or to link between the book and its author note or a concept note. And I can still create summary tables within the books.org file.

Then there’s the Graph. I make fun of the Graph because it really is mostly useless, but dammit it’s fun to poke around in.

![Part of my org-roam graph](_graph.png)

Add Org-roam’s larger ecosystem to the above list, and the decision to keep my notes in Org-roam becomes hard to argue with. I’m slowly moving my Denote notes back into Org-roam and fixing links, etc.

I don’t know why I’m so sentimental about Denote. Not using it makes me a little sad. [Prot](https://protesilaos.com/) is brilliant and I like the way he thinks. Denote is a terrific, smart, simple Emacs package, but right now Org-roam makes more sense for my notes.
