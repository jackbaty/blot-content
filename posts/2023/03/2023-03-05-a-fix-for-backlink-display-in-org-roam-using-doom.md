---
Date: 2023-03-05 07:07
Tags: Emacs, Org-roam
Slug: a-fix-for-backlink-display-in-org-roam-using-doom
---

# A fix for backlink display with Org-roam and Doom Emacs

I’ve been [tracking an issue](https://github.com/org-roam/org-roam/issues/2198#issuecomment-1449331444) with the way backlinks are displayed that affects my use of Org-roam. Someone ([hwiorn](https://github.com/hwiorn)) finally discovered a workaround when using Doom Emacs: delete the compiled version of org-roam-utils. Like this:

    rm .config/emacs/.local/straight/build-*/org-roam/org-roam-utils.elc

Now my links show up correctly. Finally! I’ll probably need to delete the file every time I sync or update but I don’t care as long as there’s a fix. It was driving me nuts.

**UPDATE:** And a few hours later, it was fixed for good in [this commit](https://github.com/org-roam/org-roam/commit/f7dc81e494e55923a9e926a817e381152ec56f52).
