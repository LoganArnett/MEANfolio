---
layout: posts
title: AutoJekyll is Born
posted: Mar. 19, 2015
excerpt: Sweet Its Automating my workflow
---

###AutoJekyll is Born

Since I began blogging I have found that the [Jekyll Blog](http://jekyllrb.com/) I started with
is an extremelg useful tool and it makes it very nice to be able to construct my posts in 
markdown. However, I have not really found the overall workflow of posting to this blog to 
be appealing. 

I initially had to open my IDE and the specific posts folder, then create a new file with the Jekyll 
naming conventions, then write out the post in markdown, then save the file, then `git add` and `git commit`
this file locally, then `git push` up to my github repo. So as you can see thats a lot of steps and just not
extremely easy for when I want to blog but only have a few minutes. So I finally decided to make a new 
tool to automate this workflow a little more.

Now, AutoJekyll is born. 

I looked at multiple options but ended up looking through the [Github API](https://developer.github.com/v3/)
and finding exactly what I wanted. So through a little API gymnastics and a nice UI constructed
with [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/) I have a nice quick way
to get a blog post ready and posted. And as an added bonus, it features a nice little live preview of you markdown post. 

Now I will need to clean up the design a little further and will be putting together a nice `README` to
show anyone else who is interested in getting a little more creative with their Jekyll blog work flow.
So be on the look out for some more info on the AutoJekyll repo coming soon.

#### Logan Out


