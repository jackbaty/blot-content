Date: 2019-02-20 13:44
Tags: books, tiddlywiki
Icon: 🌀

# Logging books in TiddlyWiki

For the past several years I've maintained [a text file listing all of the books that I've read](https://www.baty.net/books/). The simple text format makes it easy to, for example, quickly see that I read 27 books in 2017 by doing something like...

```
grep "2017-" books.md | wc -l
```

This is neat, but otherwise not terribly useful. Given [my recent fascination with TiddlyWiki](https://rudimentarylathe.org), I figured I'd try logging my books there.

I started by recreating my original list [in a single tiddler](https://rudimentarylathe.org/#Books%20archive) but other than having them in my wiki it didn't offer any advantages.

What I ended up doing was to create a "template" tiddler for books. The template looks like this...

![](https://www.baty.blog/_img/2019/2019-02-20-book-template.png)

I then created a button for easily adding a new Book tiddler. The "Add a book" button is rendered using the following macro...

![](https://www.baty.blog/_img/2019/2019-02-20-add-book-macro.png)

It looks like this in the wiki...

![](https://www.baty.blog/_img/2019/2019-02-20-book-button.png)

New Book tiddlers created with the Add a Book button are automatically tagged with "Book" and include fields for startdate, enddate, and goodreads. Those fields are used by the template so that each book tiddler is rendered showing dates and a link to Goodreads.

To include the template in a tiddler, I add the following...

```
{{{||$:/jab/viewtemplate/book}}}
```

This transcludes the custom view template like this...

![](https://www.baty.blog/_img/2019/2019-02-20-book-example.png)

Including that templates ensures that all book tiddlers contain at least the "Notes" section at the end. And they're formatted consistently. 

Storing the start/enddates in custom fields allows them to be used in other ways. Next up will be to show the enddate right in the list of books.

[Here is the result](https://rudimentarylathe.org/#Books)

This makes me want to go back and add _all_ of my books as individual tiddlers, but that may be a while.