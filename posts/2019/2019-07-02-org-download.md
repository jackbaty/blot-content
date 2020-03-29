Date: 2019-07-02 16:28
Tags: orgmode
Icon: 🌀

# Org-download and ox-hugo

One drawback of using a static blogging tool is the relative difficulty of dealing with images. Images must be copied to the proper folder and then links need to be added manually. I've created a few ways to make this easier this using TextExpander, but today I discovered [org-download](https://github.com/abo-abo/org-download).

> This extension facilitates moving images from point A to point B.

I'm using this with [ox-hugo](https://ox-hugo.scripter.co) and it works very well. I first added the following to my Emacs config...

```lisp
(use-package org-download
  :ensure t
  :init
  (setq org-download-timestamp "-%Y-%m-%d"))
```

Then, at the top of my blog file (all-posts.org), I set the following buffer-specific variable...

```lisp
-*- mode: Org; org-download-image-dir: "~/microblog/static/img"; -*-
```

Now, to add an image to a post, I just drag it from the finder into Emacs and the image is copied to my images folder (`microblog/static/image`) and a link is inserted into the buffer with the proper path, etc. The image is even shown inline by default so I can see what I'm dealing with. What a treat!

The post looks like this after dragging an image from the Finder...

```
* Posts
** 2019
*** My New Post with an image

#+DOWNLOADED: file:/Users/jbaty/Desktop/test.png @ 2019-07-02 16:44:58
[[file:../static/img/Posts/test-2019-07-02.png]]

```

The date stamp can be appended during the copy and is configured with ` org-download-timestamp`.

It's pretty slick, and takes most of the hassle out of adding images to blog posts when using Hugo/ox-hugo.