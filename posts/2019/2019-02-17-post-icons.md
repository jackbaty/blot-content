Date: 2019-02-17 08:24
Tags: meta
Icon: 🌀

# Post icons

Given my weird new blog layout, I thought[^who] it would be helpful to include a small emoji as part of the title for those posts having titles.

What I didn't want was to include the emoji as part of a post's Title field. That feels like embedding metadata where it doesn't belong and it also messes with permalinks.

This site uses [Blot](https://blot.im), so all I had to do was include a new `{{metadata.icon}}` field in the template.

![Template code](https://www.baty.blog/_img/2019/2019-02-17-blot2.png)

Now I can add an "Icon" attribute to any post's metadata for which I want an icon to show in the title.

![Post metadata](https://www.baty.blog/_img/2019/2019-02-17-blot1.png)

And voilà!

![List of posts](https://www.baty.blog/_img/2019/2019-02-17-blot3.png)

Notice I didn't use "Type" or "Category" as the icon trigger. This way, I can choose any arbitrary icon regardless of the post type. This adds a little maintenance overhead but I like the flexibility.

[^who]: By "I thought" I mean "stole from [Kevin](https://tiv.today)"