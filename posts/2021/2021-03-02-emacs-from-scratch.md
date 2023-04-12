Date: 2021-03-02 07:59
Tags: emacs
Icon: 🌀
Permalink: /2021/emacs-from-scratch-again

# Emacs from Scratch...again

Occasionally, maybe two or three times a year, I become determined to move away from Emacs. I swear that I'm sick of [Configuration Fatigue](/2021/configuration-fatigue) and I'm done for good this time!

It never sticks. I don't enjoy editing anything without proper Vim bindings and I'm not interested in going back to Vim. I don't enjoy writing in VS Code. I also love Org Mode so much it hurts. So, Emacs with [Evil Mode](/2021/configuration-fatigue) it is!

When I want a complete, wildly complex, kitchen-sink-included Emacs setup that's managed for me, I rely on [Doom Emacs](https://github.com/hlissner/doom-emacs). Sometimes, though, I feel like I'm fighting with Doom as much as relying on it. It's always being updated, which is great, but it means that things are always changing. I feel like I don't understand it and that I'm not in control. Isn't Emacs all about being in control?

So, for maybe the 6th time, I'm going to build my configuration from scratch.

OK, not exactly from scratch. I'm bringing in the best bits from [Nano Emacs](https://github.com/rougier/nano-emacs), a nice-looking basic configuration that isn't looking to be a "framework". For the moment I'm including the desired individual nano emacs files as-is. I'll probably live with it for a while and move the theming bits over by hand and basically fork it for myself.

The other change I'm making is letting Emacs be Emacs by installing packages using `package-install` and also using the built in Customizer UI when I can. Maybe if I stay away from fancy it'll stick this time.

Here's what this post looks like in Emacs...

![Nano Emacs screenshot](/_img/2021/2021-03-02-nano-emacs-screen.png)

I started a [brand new repo](https://github.com/jackbaty/emacs.d) to keep track of it all, too.



