---
layout: post
title: Looks like you got HTTP 5XX error :-/
image: /img/portfolio/5.jpg
tag: [landing-page, blog]
---

It seems you are getting HTTP 5XX status code. We get HTTP 502 error if localhost web application is not responding. Generally speaking HTTP status code 502 means *Bad Gateway* which simply meant that the application is in the localhost is not responding. When we do remote port forwarding like `0:localhost:8080` then sysb looks at `0:` and allocate a available remote port and map it to your laptop's `localhost:8080`.

If you are getting a HTTP 502 status then it means your web services at `localhost:8080` is not responding on port `8080` locally. You need to verify the health of `localhost:8080` we can do following to alleviate the issue.

1. On your localhost verify if local port 8080 is listing while running any of the below commands on your localhost
    1. `nc -v -z localhost 8080`
    1. `telnet localhost 8080`
    1. `curl localhost:8080`

1. Perhaps it is possible that your local app application is not listening on `localhost:8080` but `localhost:5000` ( Python Flask ) or `localhost:4000` ( Ruby Jekyll ). Please adjust accordingly to command `ssh -R 0:localhost:8080 demo@sysb.ai` and start tunnel again.

If you still face an issue then please let us know at [Google group](https://groups.google.com/forum/#!forum/sysb_ai) or Tweet us at [sysb_ai](https://twitter.com/sysb_ai)

<!-- ## It seems you are getting HTTP 5XX status code

|| HTTP Status code || Error ||
| 500 | Internal Server Error |
| 501 | Not Implemented |
| 502 | Bad Gateway |
| 503 | Service Unavailable |
| 504 | Gateway Timeout |
| 505 | HTTP Version Not Supported |
| 506 | Variant Also Negotiates |
| 507 | Insufficient Storage |
| 508 | Loop Detected |
| 510 | Not Extended |
| 511 | Network Authentication Required | -->