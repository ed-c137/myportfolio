---
title: Hosting a github page site to subdomain of a domain
date: "2022-03-19"
template: post
type: "post"
tags: ['github']
---

-Host the website the same way as above and add the CNAME file containing the domain with subdomain i.e 

blog.google.com
here blog is the subdomain of google

-In the dns settings of the custom domain add a CNAME record

| Type | Host | Value | TTL |
| ---  | ---  | ---   | --- |
| CNAME(ALIAS) | blog.google.com | userName.github.io. | Automatic |