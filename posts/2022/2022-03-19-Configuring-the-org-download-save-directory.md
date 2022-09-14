Date: 2022-03-19
Tags: Emacs, Misc
Permalink: /2022/configuring-the-org-download-save-directory/
Icon: 🌀

# Configuring the org-download save directory

When I drag and drop an image into Emacs, I want the attached file to end up in `./img/YYYY/`. This is how I tried configuring [org-download](https://github.com/abo-abo/org-download) in my setup (I use Doom Emacs):

```lisp
    (setq org-download-method 'directory
            org-download-image-dir (concat "img/"  (format-time-string "%Y") "/")
            org-download-image-org-width 600
            org-download-heading-lvl 1)

    (setq org-download-method 'directory
            org-download-image-dir (concat "img/"  (format-time-string "%Y") "/")
            org-download-image-org-width 600
            org-download-heading-lvl 1)
```

For some reason, `org-download-method` was being reset from `'directory` to `'attach`after loading, and this broke things. I thought maybe I needed to set the variables _after_org-download was loaded, so I did this:

```lisp
    (after! org-download
      (setq org-download-method 'directory
            org-download-image-dir (concat "img/"  (format-time-string "%Y") "/")
            org-download-image-org-width 600
            org-download-heading-lvl 1))
```    

That didn’t work. At startup I was seeing this error:

> Error (org-mode-hook): Error running hook “org-fancy-priorities-mode” because: (void-variable org-download-image-dir)

Huh. I guess not everything can be set after org-download, so I tried only setting `org-download-method`

```lisp
    (after! org-download
      (setq org-download-method 'directory))
```

This worked. The other settings are done in the `(after! org` block.

It feels like I have to fight Doom too often, but the details and refinement of Doom is worth the trouble.