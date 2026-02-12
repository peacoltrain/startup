# Notes for CS 260: Winter 2026

## Git and initial project setup

This is pretty standard. Remember the basic commands to commit, push, pull, and clone repositories. Consistency is key when working on large projects. Make sure to commit often and frequently.

## Creation of AWS Instance

For this assignment, I needed to create an AWS instance. This is essentially aquiring a server in a warehouse that I can use to host a page. The important things I need to remember are as follows. 
- I should keep my server running constantly. I choose T3.micro so it should be unlimited and I should only get charged if I shut it down and get charged through the elastic ip address.
- I will ssh into the server by using **git bash** as powershell was giving me some lip. The line to use will be ```bash ssh -i [location_of_pem_file (Currently desktop)] ubuntu@35.169.204.159```. My IP address is *35.169.204.159*. Us http not https when accessing the IP. 

## HTML relearn

It has been a while since i used HTML. The important things to remember are.
1. Make a sandwich `<something></something>`
2. HTML primarly handles structure. CSS does style and. JavaScript does interaction
3. Look up the info when you need. There are many different structures so make sure you get the right solution to each problem.

## Learning CSS

There are many different elements that can be modified in CSS. The only way to really learn about all the features is to us them. From my experimentation here are a few important things to remember.

- CSS is not like python and is needs `;` after every rule. Each rule is structured `<feature>: [parameter(s)];`
- ids are accessed through `#idvalue`, classes are accessed via `.classname`. 
- Multiple elements can have rules applied by either
    1. Adding a feature to a parent html element that both elements are children of.
    2. listing the features via comma separation.
- Animation can be a vast field but may be outside my intended scope.
- Use Flex to control how different elements change as the view also changes. This is important if you expect someone on a mobile device will use the software.
- There are also third party systems that streamline the create of css elements. I will try to use bootstrap for my project. This will require me to link it in the head of the html and then call source at the end of the body.

## The React-Vite Jungle

Although I am still unclear on some of the inner workings of the vite and react i gathered a few things from the excersize.

- You can call a .js or jsx file from the html file be using `<script src=".jsxpath"></script>`. From that .jsx script file we can then call the App.jsx file to access render. what the app itself looks like.
