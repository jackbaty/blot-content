---
Date: 2023-02-06 06:36
Tags: Blogging, Eleventy
---

# Eleventy and my Daily Notes

Somehow, for reasons unknown, I’ve rebuilt [daily.baty.net](https://daily.baty.net/) using [Eleventy](https://www.11ty.dev/).

It started when I struggled to make some tweaks to the site, which is (was) generated using Tinderbox. Tinderbox, being Tinderbox, is ridiculously powerful and flexible, but it wasn’t doing what I thought I was telling it to do. So I stepped away and started tinkering with its inspiration, my Drummer blog. For a hot minute, I considered going back to using Drummer, even though I worry about its longevity. Drummer is how blogging is supposed to work (at least in my head), so I started looking at it again.

Then Twitter decided to shut off its free API, which Drummer depends on for identity. Thankfully, Dave is working on a path around the Twitter problem, but in the meantime has temporarily [shut down Drummer](http://scripting.com/2023/02/04.html#a162658).

While I waited, I wondered if instead, I could make Hugo look and work like my Tinderbox blog, but I quickly realized that I’m never going to understand Hugo’s templating process/language enough to do anything clever with it.

What about Eleventy? I’d never really considered Eleventy but I know some people really like it. When I saw that they had recently [announced the v2.0 (beta)](https://www.11ty.dev/blog/eleventy-v2-beta/), I figured it was a good time to see what it was all about.

The short answer is that I like it! I found the basics much easier to grok than Hugo. I had a simple blog put together in a couple of hours. It was one of those incremental things where I experienced small, early wins, so I was encouraged to continue.

I pulled the (admittedly outdated) CSS and markup from my Tinderbox templates and shoehorned them into Nunjucks files. It was surprisingly easy, so I kept going and was so successful that within a few more hours I’d decided to go all-in and now daily.baty.net is running Eleventy. Good times!
