---
Date: 2022-12-02 14:44
Tags: Emacs
Icon: 🌀
Link: /2022/converting-markdown-to-org-mode-syntax-in-buffer
---

# Converting Markdown to Org-mode syntax in current buffer

There are some great tools for bringing web content into Markdown files, but few that offer the same utility for Org-mode ([Orgdown](https://gitlab.com/publicvoit/orgdown)) files.

For example, I use [Markdownload extension](https://github.com/deathau/markdownload) all the time. It works great with nearly every site I use it on, but instead of Markdown, I’d prefer having Org syntax, so I’ve worked around it by creating a function ((I may have copied this idea from somewhere but I don’t have a reference. If it was you, I apologize for not giving credit. Send me a note! )) which converts the current region from Markdown to Org.

```lisp
(defun jab/md-to-org-region (start end)
  "Convert region from markdown to org, replacing selection"
  (interactive "r")
  (shell-command-on-region start end "pandoc -f markdown -t org" t t))
```

I copy the Markdown from the Markdownload window, paste it into an Org buffer, and run the function. It’s not perfect, but until someone creates an “Orgdownload” extension, it’ll do. (Pretty please, will someone create an Orgdownload extension?)
