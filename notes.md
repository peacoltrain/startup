# Notes for CS 260: Winter 2026

## Git and initial project setup

This is pretty standard. Remember the basic commands to commit, push, pull, and clone repositories. Consistency is key when working on large projects. Make sure to commit often and frequently.

## Creation of AWS Instance

For this assignment, I needed to create an AWS instance. This is essentially aquiring a server in a warehouse that I can use to host a page. The important things I need to remember are as follows. 
- I should keep my server running constantly. I choose T3.micro so it should be unlimited and I should only get charged if I shut it down and get charged through the elastic ip address.
- I will ssh into the server by using **git bash** as powershell was giving me some lip. The line to use will be ```bash ssh -i [location_of_pem_file (Currently desktop)] ubuntu@35.169.204.159```. My IP address is *35.169.204.159*. Us http not https when accessing the IP. 