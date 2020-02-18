---
layout: post
title: How to access my local web application over internet?
image: /img/portfolio/1.jpg
tag: [landing-page, blog]
---

If you have a web application running perfectly in your laptop and now you have a need to have a functionality where you want it to share with someone over internet then sysb.AI can help you. Assuming your web application is accessible locally at `http://localhost:8080` then all you need to do is the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:8080 demo@sysb.ai`
    1. Here `-R` is the remote port forwarding flag of ssh command
    1. `0:` tells to dynamically allocate a remote port on sysb.ai which will have connection to `localhost:8080` which is your laptop/desktop.
        1. There are many folks who use sysb.ai and to ensure that there is no conflict on the assignment of remote port then we should get a request for a dynamic port. We advice to keep it `0:`
        1. Irrespective of any dynamic assigned port on the remote server, You would be able to access your web application over HTTP and HTTPS on port 80 and 443 respectively. Dynamic port issued by sysb.AI can be used for TCP connectivity.
    1. `localhost:8080` is pointing to your web application running locally in your laptop
        1. Here `:8080` is the local port number on which your local web application is listening on your laptop 
    1. `demo` the free user account which allows following entitlements
        1. 1 free tunnel
        1. 1 TCP protocol support
        1. Dynamic SUBDOMAIN to sysb.ai
        1. Custom Host Header to sysb.ai
    1. `sysb.ai` is our intelligent infrastructure which help you to access your localhost
1. Above steps will help you to get dynamic HTTP and HTTPS URLs which you can use to access your local web application over internet