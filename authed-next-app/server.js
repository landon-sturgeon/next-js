const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post("/api/login", (request, response) => {
    const { email, password } = request.body;
    response.json({
      email,
      password,
      success: true
    })
  });

  server.get("*", (request, response) => {
    return handle(request, response);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${ port }`);
  });
});