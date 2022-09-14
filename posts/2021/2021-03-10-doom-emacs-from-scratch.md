Date: 2021-03-10 08:28
Tags: 
Icon: 🌀
Permalink: /2021/doom-emacs-from-scratch

# Doom Emacs from scratch

_NOTE: This post was first published on copingmechanism.com but I think it makes more sense here._

A week ago I decided to cancel Doom Emacs and go back to building Emacs from Scratch, and once again I was reminded what a terrible idea that is.

Seriously, stock Emacs, even with a leg up from Nano Emacs, gets so many things "wrong" that I could spend the rest of my life fixing things and still wanting more. I thought building from scratch would help me avoid Configuration Fatigue. Wow, was I wrong.

So, back to Doom. I started from scratch with the usual...

```
git clone --depth 1 https://github.com/hlissner/doom-emacs ~/.emacs.d
~/.emacs.d/bin/doom install
```

Then I edited init.el and enabled just a few non-stock things. "Zen" mode, org-journal, and pandoc-mode. Otherwise, it's right out of the box.

I copied the gotta-haves from my original config.el. Most of these are around file paths, Org mode, and LaTeX. Plus a few of my favorite key bindings. Otherwise, I left it alone. So far.

Doom Emacs is simply too good to pass up. It handles all of the little behavioral and visual tweaks that would otherwise take forever to learn about and modify on my own. Half of the things it does for me I just expect to be part of Emacs, and am surprised when I find they're not.

I'm still using the default Doom theme, which isn't my favorite, but I'm trying to resist farting around with that for at least a couple of days while I get settled back in.

![Doom Emacs](/_img/2021/2021-03-10-doom-emacs-from-scratch.png)
