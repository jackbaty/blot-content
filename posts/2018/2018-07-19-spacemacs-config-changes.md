Date: 2018-07-19 13:25
Tags: emacs

# Spacemacs configuration changes
I've made some recent changes to my [Spacemacs](http://spacemacs.org) configuration.

I like to keep my spacemacs/emacs config synced between devices. To do this, I'd
been keeping everything in `~/.spacemacs.d/` and syncing the entire directory.
My `init.el`, private layers, snippets, bookmarks, etc. lived in `~/.spacemacs.d/` and
synced via Syncthing. Worked great.

It worked great, that is, until recent changes were made to the way Spacemacs
handles environment variables. Spacemacs now reads environment variables from
the default shell and writes them to a file in the
configuration folder as `~/.spacemacs.d/.spacemacs.env`. This meant
that every time things synced, it wreaked havoc on the _other_ system, since many of the
environment variables are different between the Mac and Linux machines.

So, I went back to the normal method of keeping my configuration in a
`~/.spacemacs` file and symlinking my layers and such from elsewhere into
`~/.emacs.d/private`. The .env file is now created at `~/.spacemacs.env` so it
doesn't get synced. I imagine there's an easier way to handle this, but this is
what I did for now.
