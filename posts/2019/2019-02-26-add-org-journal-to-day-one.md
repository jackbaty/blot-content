Date: 2019-02-26 18:42
Tags: orgmode
Icon: 🌀

# Sending an Emacs buffer to Day One

I have mostly given up trying to keep my digital journal in anything other than [org-journal](https://github.com/bastibe/org-journal). I do also use Day One as a photo log, and sometimes I consider moving my daily journals back there, but it doesn't happen.

In order to hedge my bets, I'm sending each day's org-journal entry to Day One using the following bit of elisp:

```lisp
(defun jab-dayone-add-note ()
  "Sends contents of buffer as Day One entry"
  (interactive)
  (shell-command-on-region
   (point-min)
   (point-max)
  "/usr/local/bin/dayone2 -j=Journal new"
  nil))
```

It's not fancy. The entire buffer is sent as a new entry to Day One, using the current date. At some point I may get fancy and use the org-journal entry's date and possibly include tags. For now, this is almost like cross-posting journal entries from Org to Day One, so I don't have to decide which to use.