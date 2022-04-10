---
title: Upload site to github and custom domain
date: "2022-03-18"
template: post
type: "post"
tags: ['github','setup']
---

>In package.json add this line

“homepage”: “https://yourcustomdomain.com”

>Install gh-pages with `npm install -D gh-pages`

>In package.json in scripts add

“predeploy”: “npm run build”,

“deploly”: “gh-pages -d build”,

or

“deploy”: “npm run build && gh-pages -d build”

or 

to copy the cname from root to dist folder

“deploy”: “npm run build && cp && gh-pages -d build”

>push changes to master

>`npm run deploy`

Purchase the domain and go to DNS settings and add the A record to it.Then add the CNAME to it

| Type | Host Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.53 | 20min |
| A | @ | 185.199.109.53 | 20min |
| A | @ | 185.199.110.53 | 20min |
| A | @ | 185.199.111.53 | 20min |
| CNAME | www | username.github.io. | Automatic |

In the root of your project or the public folder should have a “CNAME” File, add it, which should have the domain name eg. somedomain.com

Wait for 15mins or so to update changes on the nameservers.

