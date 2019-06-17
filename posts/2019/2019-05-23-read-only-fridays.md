Date: 2019-05-23 10:21
Tags: development
Icon: 🌀

# When "Read-Only Friday" might still make sense

![2019-05-23-read-only-friday](/_img/2019/2019-05-23-read-only-friday.jpg)

The t-shirt I'm wearing in the above photo is having fun with the idea of "Read Only Fridays", the policy of never deploying code or making significant infrastructure updates on Friday afternoons[^assuming]. This has been popular with development teams, because if something were to go wrong, people could end up working throughout the weekend. Nobody wants that.

I've read a couple articles recently[^smug] ridiculing teams that adopt a Read Only Fridays policy. After all, modern continuous integration tools, testing, and deployment processes have gotten so good that teams should no longer fear deploying at any time.

Of course, this assumes that they're *able* to use all those modern tools and processes. For example, I manage a number of legacy projects that remain important to the client and their users, but no longer have the attention or budget for modernizing or retro-fitting unit tests that were never written in the first place. Of course you could argue that they _should_ have been written, but for whatever reason they weren't, and never will be, so here we are. We don't release those projects on Friday.

In other cases, we develop and maintain web applications for larger companies requiring long, drawn-out approval processes before any changes are deployed. Then, even after everything has been tested and approved, they might find some unforeseen side effect or behavior change an upper-level individual hadn't considered, so they freak out and want things "fixed" immediately. Continuous integration magic or unit tests don't prevent this, so we don't deploy on Friday.

And what if a dev team isn't perfect and maybe had an off day and didn't write perfect integration tests and something slips through? That can happen to the best of 'em.

So sure, the goal is to use the tools and processes that allow for stress and error-free deployments any time, but that doesn't mean there aren't situations when we're just better off not deploying on Friday.

Have a great weekend!



[^assuming]: Assuming of course the business doesn't _require_ releasing at that time for other reasons
[^smug]: I'm not linking to them because they were so smug, condescending, and click-baity that you're better off not reading them.