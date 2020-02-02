const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((request, response) => {
    // parse request url to get its pathname
    const parsedUrl = url.parse(request.url, true);
    const { pathName } = parsedUrl;

    // if a service worker requested, serve it as a static file
    if (pathName === "/service-worker.js") {
      const filePath = path.join(__dirname, ".next", pathName);
      app.serveStatic(request, response, filePath);
    } else {
      // otherwise, let next take care of it
      handle(request, response, parsedUrl);
    };
  }).listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  });
});