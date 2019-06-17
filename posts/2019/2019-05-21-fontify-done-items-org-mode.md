Date: 2019-05-21 09:13
Tags: emacs, orgmode
Icon: 🌀



# Fontifying org-mode DONE items

I use the beautiful [Nord-emacs](https://github.com/arcticicestudio/nord-emacs) theme with Emacs. By default, DONE items in org-mode aren't as easily distinguishable from the other states as I'd like, so I change the fonts like so...

```lisp
(setq org-fontify-done-headline t)

(custom-set-faces
 '(org-done ((t (:foreground "PaleGreen"
                 :weight normal
                 :strike-through t))))
 '(org-headline-done
            ((((class color) (min-colors 16) (background dark))
               (:foreground "#5E81AC" :strike-through t)))))
```

This changes the font color to something more subtle and also uses a Strikethrough format to the entire heading. It looks like this...

![Nord-emacs](/_img/2019/2019-05-21-nord-emacs.png)

