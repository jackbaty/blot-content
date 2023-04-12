Date: 2022-09-21 06:56
Tags: Emacs, Email
Icon: ️🌀
Permalink: /2022/tagging-deleted-messages-in-notmuch
Draft: No

# Tagging deleted messages in Notmuch

I use [Notmuch](https://notmuchmail.org/) in Emacs for managing my email. It's fast, powerful, and (once used to it) easy to use.

There are a few oddities I've learned to work around. The first is with deleting messages. The manual for Notmuch states:

> notmuch does not support, nor ever will, the deleting of messages

I'm ok with this, since Notmuch provides a way to essentially bury deleted messages using tags. I don't necessarily need to actually delete the message file. Any message tagged with `+deleted` is hidden from searches unless explicitly included. Ignored tags are set in ~/.notmuch-config like so: 

```
[search]
exclude_tags=deleted;trash;
```

This works fine, but the problem is that my new messages are also automatically tagged with `+unread` and `+inbox`, so in order to properly flag a message as deleted, I want those two tags removed as well. There seems to be no built-in way to do this. I found this odd, since there is `notmuch-archive-tags`, which lets me configure which tags are added or removed when archiving a message. Here's my config for that:

```lisp
(setq notmuch-archive-tags '("-inbox" "-unread" "+archived"))
```

There is no such configuration for deletion, so I made my own. To do this, I borrowed some code from [Spacemacs](https://spacemacs.org) and integrated into my Doom Emacs config.

```lisp
(setq notmuch-message-deleted-tags '("+deleted" "-inbox" "-unread"))

(defun jab/notmuch-search-message-delete (go-next)
  "Delete message and select GO-NEXT message."
  (notmuch-search-tag notmuch-message-deleted-tags)
  (if (eq 'up go-next)
      (notmuch-search-previous-thread)
    (notmuch-search-next-thread)))

(defun jab/notmuch-search-message-delete-down ()
  "Delete a message and select the next message."
  (interactive)
  (jab/notmuch-search-message-delete 'down))

;; My own delete key
(map! :map notmuch-search-mode-map
        :n "D" #'jab/notmuch-search-message-delete-down)

```

Now, pressing "D" in any notmuch search buffer deletes the selected message and moves to the next one. This all seems like it should be built in, but if it is I couldn't find it. If anyone knows a better way to handle this, please [let me know](mailto:jack@baty.net).

