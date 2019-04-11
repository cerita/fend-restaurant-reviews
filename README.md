### Installation

Clone repository or download files.
Go to the project directory.
You need a localserver to be able to run the service worker.

Python can setup one very simple, To set it up:

- Check your Python version. In a terminal type: `python -V`.
  - If you have Python 2.x, type `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use. If you need to use another port you must change the `const = 8000` iat the beginning of dhelper.js file according to the port you use).
  - For Python 3.x, you can use `python3 -m http.server 8000`.

If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

- With your server running, visit the site: `http://localhost:8000` to laucnch the project.