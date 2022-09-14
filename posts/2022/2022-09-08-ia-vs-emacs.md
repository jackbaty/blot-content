Date: 2022-09-08 07:25
Tags: Emacs
Icon: 🌀
Draft: No

# iA Writer vs Emacs

[![iA Writer, left. Emacs, right](/_img/2022/20220908-ia-vs-emacs.png)](/_img/2022/20220908-ia-vs-emacs.png)

Emacs can be ugly, but it doesn't *have* to be. Above we have the highly-polished and thoughtful [iA Writer](https://ia.net/writer) on the left and Emacs on the right.

I'm using Doom Emacs in "Zen" mode, which is basically a tweaked version of [Writeroom-mode](https://github.com/joostkremers/writeroom-mode). My tweaks include using [iA's Quattro font](https://github.com/iaolo/iA-Fonts) as a variable-pitch font and a little spacing via `line-spacing`.

```lisp
(add-hook 'writeroom-mode-hook (lambda () (setq line-spacing 0.5)))

```

iA Writer is wonderful for editing Markdown files. Might even be "nicer" overall than Emacs for that purpose. It's just so smooth, you know? But, Emacs is Emacs and that's tough to beat. I alternate between them. It helps that I've made them look similar.

I keep removing excuses to quit using Emacs.

