---
layout: post
title: Frequently asked questions
image: /img/portfolio/6.jpg
tag: [landing-page, blog]
---

We keep on getting the same questions multiple times, so we thought of keeping them here in FAQ section

1. How can we report the issue or request for new feature
    1. You can raise a github issue at https://github.com/systembee/sysb.AI/issues to report a issue or request for a feature.
1. I am wondering if there a mailing list which we can join to discuss new features and enhancement?
    1. Yes you can join our [Google group](https://groups.google.com/forum/#!forum/sysb_ai) mailing list to discuss new feature and enhancement
1. Why I am not able to access old URL given by sysb.AI
    1. All the subdomain provided while tunneling is ephermeral which is active till your particular tunneling is active
1. How to stop the port forwarding
    1. If you are using terminal then `ctrl+c` is your friend to stop the port forwarding
1. My internet is damn slow and I am getting frequent disconnection
    1. We advice you to use `-C` in your ssh client flags as it will compress the data being used in the connection. Though, it will only slow down things on fast networks. So I advice to use only when network is damn slow. Syntax is as follows:
        1. `ssh -CR 0:127.0.0.1:8080 demo@sysb.ai`
        1. Keep notice on `-C` flag
1. Does it support windows
    1. Yes, you can use `putty` like ssh client which has option to do remote port forwarding
1. When you prefix `sudo` before the ssh command then then local user's `~/.ssh/config` file is skipped and in that case we recommend to use either command line flag like `-o SendEnv=SYSB_HOST_HEADER` or `-F` flag to specifiy the location of `~/.ssh/config` file
1. How to avoid frequent disconnect due to idle timeout
    1. We recommened to put the directives like `ServerAliveInterval` and `ServerAliveCountMax` in `~/.ssh/config` file which will protect the idle session from getting disconnected
    ```
    Host sysb.ai
      SendEnv SYSB_SUBDOMAIN SYSB_HOST_HEADER
      ServerAliveInterval 300
      ServerAliveCountMax 3
    ```
1. How do we proniciate sysb.ai?
    1. it is 'sisbi dot ai'
