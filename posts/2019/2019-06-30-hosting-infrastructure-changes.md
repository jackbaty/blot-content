Date: 2019-06-30 10:32
Tags: hosting, gitea, goaccess
Icon: 🌀

# Hosting infrastructure changes this weekend

I've made a number of fun changes to how things are run around here, server-wise. The goal was to move as much as possible back to my self-hosted EC2 instance and remove some 3rd-party services while I was at it.

Here's what happened.

I've moved the [baty.net](https://www.baty.net/) archive from Github/Netlify to a static site on my server. Netlify is awesome but I'm capable of managing my own server, SSL, etc. I lose the CI and CDN portions, but those right now are less important to me than keeping things together and minimizing moving parts. Plus, I get access to the web server logs this way.

I've replaced 3rd-party analytics with [GoAccess](https://goaccess.io). It's not as easy to spot normal visitor traffic, but I do get stats on just about everything else, without dealing with a tracking script. As long as I have access to the web server logs, GoAccess should be fine.

I've moved my microblog ([micro.baty.net](https://micro.baty.net/)) to a [Hugo](https://gohugo.io)-based static site, also hosted on my EC2 instance. To make posting easier, I've set up [ox-hugo](https://ox-hugo.scripter.co) so every post is just a single headline in one big org-mode file. To publish updates, I've created a small Makefile and simply run `make deploy`, which rsyncs everything up to the server.

I've started moving my private Git repos to my own [gitea](https://gitea.io/en-us/) instance. Super lightweight and private. To upgrade, I just replace a single binary and restart the service.

All of the above are served using the [Caddy](https://caddyserver.com) web server instead of nginx. Caddy does all sorts of nice stuff right out of the box (e.g. SSL and pretty directory listings) and configuration couldn't be simpler.

I have a few cleanup tasks left and some automation to build but it's quite fun having everything under my own roof and tinkering in whatever ways I see fit.

