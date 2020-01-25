# Welcome
Front page of [https://www.sysb.ai](https://www.sysb.ai)

## Access your localhost

## How to access my local web application over internet?

If you have a web application running perfectly in your laptop and now you have a need to have a functionality where you want it to share with someone over internet. Assuming your web application is accessible locally at `http://localhost:8080` then all you need to do is the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:8080 demo@sysb.ai`
    1. Here `-R` is the remote port forwarding flag
    1. `0:` tells to dynamically allocate a remote port in sysb.ai which will have connection to `localhost:8080` locally
        1. There are many folks who use sysb.ai and to ensure that there is no conflict on the assigned remote port then we should get a request for a dynamic port.
        1. Irrespective of any dynamic assigned port on the remote server, You would be able to access your web application over HTTP and HTTPS on port 80 and 443 respectively
    1. `demo` the free user account which allows following entitlements
        1. 1 free tunnel
        1. 1 TCP protocol support
        1. Dynamic SUBDOMAIN to sysb.ai
    1. `sysb.ai` is our intelligent infrastructure which help you to access your localhost
     
1. Above command will give you a dynamic HTTP and HTTPS which you can use to access your local web application over internet

## How to access my TCP application over internet?

It is quite possible that you may want to expose some other TCP based application over internet and you just need an endpoint which is accessible publicly. Like you probably just want to have your IoT device like Raspberry PI sshable. It is absolutely simple to do that. All you need to do the following

1. Open the terminal
1. Run the following command
    1. `ssh -R 0:localhost:22 demo@sysb.ai`
1. Above command will give a dynamic URL which can be accessed publicly to ssh your Raspberry PI. Please keep special attention to dynamic port number. You need both public FQDN and port number to access your TCP application like following
    1. After running the above command you may get one of the TCP port forwarding request like `tcp://sysb.ai:28559` and now you can access it as `ssh sysb.ai -p 28559`


## Here is the list of frequently asked questions

1. How can we report the issue or request for your feature
1. How can I provide customized `Host:` header while doing port forwarding
1. How can I get static subdomain of sysb.ai?
1. Does it support Secure HTTP ( HTTPS ) protocol?
1. Does it support HTTP2 protocol?
1. Does it support TCP port forwarding?
1. Why I am not able to access old URL given by sysb.AI
1. What kind of environment variables are supported?
    1. SYSB_HOST_HEADER
    1. SYSB_SUBDOMAIN
1. How do we proniciate sysb.ai?
    1. it is 'sisbi dot ai'
