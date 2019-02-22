Date: 2019-02-02 11:10
Tags: emacs
Permalink: /2019/insert-weather-into-emacs-buffer


# Inserting the current weather into an Emacs buffer

I'm trying to learn a little elisp. It's slow going, so having a specific need is helpful.

I like to insert the current weather in each day's [org-journal](https://github.com/bastibe/org-journal) entry. Previously, I had a TextExpander snippet that would insert the following:

```org
#+BEGIN_SRC sh :results value verbatim
curl "wttr.in/49301?0pQT"
#+END_SRC
```

This works, but I have to activate the snippet, put the point on the #+BEGIN_SRC line, hit `C-c C-c` to run it, then delete the block.

As an elisp-learning exercise I thought I'd try creating a function that would do everything for me. Here's what I came up with:

```lisp
(defun jab-insert-weather ()
  (interactive)
  (let ((w (shell-command-to-string "curl -s 'wttr.in/49301?0pQT'")))
  (insert (mapconcat (function (lambda (x) (format ": %s" x)))
           (split-string w "\n")
           "\n"))
```

Now, typing `M-x jab-insert-weather` will insert something like the following into the current buffer:

```
:               Overcast 
:      .--.     14-21 °F
:   .-(    ).   ↗ 8-20 mph 
:  (___.__)__)  12 mi
:               0.0 in | 0%
```
