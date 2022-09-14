Date: 2022-09-01 15:20
Tags: Meta, Blot, Blogging
Icon: 🌀
Slug: 2022-09-01
Draft: No

# Dusted off the Blot blog

Remember [Blot.im](https://blot.im)? I do. I loved blogging with Blot. Hmmm, you mean I can start creating simple Markdown files in a folder and be done? No rendering or elaborate syncing/deployment requirements. No real dependencies at all. OK then! (Can you tell I've been a little frustrated with my Emacs, Org-mode -> Hugo situation?)

I made a quick Espanso trigger for generating Blot front matter. (I had to escape the curly braces with a backslash so you'd have to remove those):

```yaml
  - trigger: ":blot"
    vars:
      - name: mydate
        type: date
        params:
          format: "%Y-%m-%d"
      - name: mytime
        type: date
        params:
          format: "%H:%M"
    replace: "Date: \{\{mydate}} \{\{mytime}}\nTags: \nIcon: 🗓️ 🌀🔗🎵📷📚 \nSlug: \{\{mydate}}\nDraft: Yes\n\n# "
```

So typing `:blot` gets me this:

```
Date: 2022-09-01 15:16
Tags: 
Icon: 🗓️ 🌀🔗🎵📷📚 
Slug: 2022-09-01
Draft: Yes

# 
```

I add tags and delete all but the relevant Icon and I'm off and running.