Date: 2020-03-29 12:43
Tags: blot,blogging
Icon: 🌀

# Blot revived

I [missed using Blot](/2020/i-miss-blot) enough that I've gone through the trouble of reviving it at baty.blog.  This took a little work. For the record, here's what I did:

- Moved DNS from DigitalOcean to Route53. All my active domains live in AWS.
- Created an S3 bucket to handle redirects from baty.blog to www.baty.blog
- Added CNAME record from www.baty.blog -> blot.im
- Created SSL cert in AWS Cert manager for baty.blog
- Created Cloudfront distribution with S3 bucket as origin. Use the bucket hostname as listed on the bucket. Don't choose from the dropdown.
- Added baty.blog as additional domain in Cloudfront distribution
- Changed apex record so it's an "Alias" and pointed it to the Cloudfront distribution

I think that's it. Seems like a lot of fuss but it's really not that bad.

The only thing to consider now is if I should change it to use copingmechanism.com domain and migrate my Ghost posts here. Not likely, but it's being considered.

Good to be back using Blot! 