---
Date: 2022-11-30 10:05
Tags: Emacs, Software
Icon: 🌀
Link: /2022/keeping-my-org-agenda-updated
---

# Keeping my Org Agenda updated based on Denote keywords

I’ve recently switched from using [Org-roam](https://www.orgroam.com/) to using [Denote](https://protesilaos.com/emacs/denote) for my notes. Org-roam is powerful and cool, but I prefer the more straightforward approach of Denote.

I keep all my notes in Denote, including notes about current projects. For example, we’re planning to remodel our kitchen. This is a project and so I have a Denote file named “20221130T130143–kitchen-remodel-2023\_\_house\_project.org”. In this file, I keep a list of TODOs. In order to see these TODOs in my [Org Agenda](https://orgmode.org/manual/Agenda-Views.html), I need to add the file to org-agenda-files. This can be done a few ways, but all are manual. I am forgetful, so I wanted a more automated way to keep my org-agenda-files up to date with Denote projects.

David of System Crafters created a [video](https://www.youtube.com/watch?v=CUkuyW6hr18) about hacking Org-roam containing something like what I was looking for [in the show notes](https://systemcrafters.net/build-a-second-brain-in-emacs/5-org-roam-hacks/#build-your-org-agenda-from-org-roam-notes), but for Org-roam not Denote.

I took the idea and implemented it for Denote instead. All it does is search denote-directory for files with a specific pattern and append the results to my default list of org-agenda-files. It looks like this:

```lisp
;; Add all Denote files tagged as "project" to org-agenda-files
(defun jab/denote-add-to-agenda-files (keyword)
  "Append list of files containing 'keyword' to org-agenda-files"
  (interactive)
  (jab/init-org-agenda-files) ;; start over
  (setq org-agenda-files (append org-agenda-files (directory-files denote-directory t keyword))))

(jab/denote-add-to-agenda-files "_project")
```

That’s it. Now I can keep my project TODOs in the project Org files and view them in the Agenda. You’ll notice that there’s nothing in there that actually depends on Denote. It’s all just basic Emacs stuff. That’s one of the reasons I love Denote so much; even _I_ can riff off it. I haven’t found a good way to add newly-created project files to the agenda without reloading Emacs or calling the function manually, but I’ll get to that later.

**Later:** [Protesilaos Stavrou](https://protesilaos.com/) (known as “Prot”), the author of Denote, was kind enough to send me the following code for helping automatically maintain the list of org-agenda-files…

```lisp
    (defvar my-denote-to-agenda-regexp "_project"
      "Denote file names that are added to the agenda.
    See `my-add-denote-to-agenda'.")

    (defun my-denote-add-to-agenda ()
      "Add current file to the `org-agenda-files', if needed.
    The file's name must match the `my-denote-to-agenda-regexp'.

    Add this to the `after-save-hook' or call it interactively."
      (interactive)
      (when-let* ((file (buffer-file-name))
                  ((denote-file-is-note-p file))
                  ((string-match-p my-denote-to-agenda-regexp (buffer-file-name))))
        (add-to-list 'org-agenda-files file)))

    ;; Example to add the file automatically.  Uncomment it:

    ;; (add-hook 'after-save-hook #'my-denote-add-to-agenda)

    (defun my-denote-remove-from-agenda ()
      "Remove current file from the `org-agenda-files'.
    See `my-denote-add-to-agenda' for how to add files to the Org
    agenda."
      (interactive)
      (when-let* ((file (buffer-file-name))
                  ((string-match-p my-denote-to-agenda-regexp (buffer-file-name))))
        (setq org-agenda-files (delete file org-agenda-files))))
```

This works great. Thanks, Prot!
