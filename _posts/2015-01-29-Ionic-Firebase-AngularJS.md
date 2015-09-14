---
layout: posts
title: Ionic Framework + Firebase iOS App
image: /images/ionicscreen.png
posted: Jan. 29, 2015
excerpt: Finally got my app past the login screen natively on my phone in development mode so I can fiddle with the features within the mobile environment. I still definitely have some styling to adjust within the app and smooth out some of the transitions between screens but overall this project has been an awesome undertaking.
---

### Ionic + Firebase + AngularJS = Activ8

Finally sat down and checked out the [Ionic Framework Docs](http://ionicframework.com/) to start turning
my final project from The Iron Yard, Activ8, into a native mobile app. So far it has been changing out
most of the CSS classes and HTML tags with the appropriate equivalents in Ionic. After a day or so of 
manipulating the appearance to come out correctly with the `ionic build` I was able to check out the 
AngularJS side of things and found a major problem!

For my final project I utilized [Firebase](https://www.firebase.com/) as my backend to store the workout
data. The issue with using Firebase is that the Facebook login process for the web apps with AngularFire
uses a Redirect or Popup window, and native apps don't necessarily agree with this. So after a pretty good 
amount of time on the Goolges and StackOverflow I found a number of possible issues. I made sure that my 
controllers were registering in the app and console.log'd all the things and found that it was definitely 
the Redirect/Popup. This lead me to checking into the [Cordova](http://cordova.apache.org/) plugin called 
[inAppBrowser](https://github.com/apache/cordova-plugin-inappbrowser) which would allow my app to login through t
he Popup option with Firebase and Facebook. 

This appeared to be the answer to my coding prayers until I installed the plugin and saved, cleaned, and 
rebuilt and then!!!!! nothing happened. Still busted. So back to the Googles and StackOverflows for more 
research and found a lot of people with the same question but no real straight answers but the inAppBrowser 
plugin kept coming in to the conversation again and again. So I looked deeper into the plugin and found a 
few issues with how it was adding into Xcode and adjusted for those but still nothing. Almost ready to admit 
defeat for the day I finally stumbled upon [this StackOverflow thread](http://stackoverflow.com/questions/25398415/ionic-build-error-with-cordova-inappbrowser) which appeared 
to have the same answers but a random idea that didnt make sense to me, deleting the `build` folder? But 
at this point I was ready to try anything to find a work around. And wouldn't you know it, it worked like 
a charm. Finally got my app past the login screen natively on my phone in development mode so I can fiddle
with the features within the mobile environment. I still definitely have some styling to adjust within the app and smooth out
some of the transitions between screens but overall this project has been an awesome undertaking. It has really
expanded my view on the potential of web and native apps and how much I can utilize AngularJS now with this
new found love of Ionic. 

That's it for me, if you have any questions about using Ionic, Firebase, and/or AngularJS in your upcoming projects
let me know. I'd love to help out in any way that I can.



#### Logan Out!