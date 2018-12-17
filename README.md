Restaurant Review App
---

## Project Overview:

This project has been brought up to date to be responsive to different display sizes, accessible to a variety of users, and provide offline availability through the use of the service worker caching abilities.

### Prerequisites

* Your favorite web browser.
* Python 2

### Built With

* HTML5
* CSS3
* JavaScript ES6


### How to run:

Download the files and navigate to the top level of the folder. Open a terminal and run `python -m SimpleHTTPServer 8000` (or other desired port in place of 8000). Open up the web browser and navigate to localhost:8000.

### Attribution

Service worker code has borrowed from [Google Developers web fundamentals website](https://developers.google.com/web/fundamentals/primers/service-workers/), altering my Fetch event listener to clone a request so it can be used to pass the fetch to the user and cache the result.
