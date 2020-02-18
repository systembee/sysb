---
layout: post
title: How to add Host header?
image: /img/portfolio/3.jpg
tag: [landing-page, blog]
---

In order to run our local web application properly over internet we may require to send custom `Host:` header to our local web server. By default we send `localhost` as the `Host:` header to local web application. Though, it can be chanaged and do so we need to perform the below steps
1.  We need to export the environment variable and we run the below command on terminal:
```
export SYSB_HOST_HEADER={{site.data.blog.sysb_host_header}}
```
1. Then we need to have below entry in `~/.ssh/config`
```
Host sysb.ai
  SendEnv SYSB_HOST_HEADER
```
1. Now all we need to do is to execute below command to get the custom `Host:` header
```
ssh -R 0:localhost:8080 demo@sysb.ai
```

Alternatively, if we prefer ssh's command line flag of `ssh` over config file then we can also get it done as below:
```
export SYSB_HOST_HEADER={{site.data.blog.sysb_host_header}}
ssh -o SendEnv=SYSB_HOST_HEADER -R 0:localhost:8080 demo@sysb.ai
```

If you want to send both SYSB_SUBDOMAIN and SYSB_HOST_HEADER then that be done using below steps:
1. First we need to export the variables
```
export SYSB_SUBDOMAIN={{site.data.blog.sysb_subdomain}} SYSB_HOST_HEADER={{site.data.blog.sysb_host_header}}
```
1. Then we need to define both SYSB_SUBDOMAIN and SYSB_HOST_HEADER in ssh config file
```
Host sysb.ai
  SendEnv SYSB_SUBDOMAIN SYSB_HOST_HEADER
```
1. After that, we just need to execute the below command to start the tunneling with static subdomain and custom header
```
ssh -R 0:localhost:8080 demo@sysb.ai
```

Alternatively, if we prefer ssh's command line flag of `ssh` over config file then we can also get it done as below:
```
export SYSB_SUBDOMAIN={{site.data.blog.sysb_subdomain}} SYSB_HOST_HEADER={{site.data.blog.sysb_host_header}}
ssh -o SendEnv=SYSB_SUBDOMAIN SendEnv=SYSB_HOST_HEADER -R 0:localhost:8080 demo@sysb.ai
```

_This feature is currently in development stage_