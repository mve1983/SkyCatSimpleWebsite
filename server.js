const express = require("express");
const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.static("./client/public"));

server.use((req, res, next) => {
  if (req.path.slice(-1) === "/" && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    const safepath = req.path.slice(0, -1).replace(/\/+/g, "/");
    res.redirect(301, safepath + query);
  } else {
    next();
  }
});

server.get("/de", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/de/home.html");
});
server.get("/en", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/en/home.html");
});

server.get("/de/products", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/de/products.html");
});
server.get("/en/products", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/en/products.html");
});

server.get("/de/team", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/de/team.html");
});
server.get("/en/team", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/en/team.html");
});

server.get("/de/contact", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/de/contact.html");
});
server.get("/en/contact", (_req, res) => {
  res.sendFile(process.cwd() + "/client/pages/en/contact.html");
});

server.get("/", (req, res) => {
  const lang = req.headers["accept-language"];
  if (
    lang.includes("de-DE") ||
    lang.includes("de-AT") ||
    lang.includes("de-CH")
  ) {
    res.redirect(301, "/de");
  } else {
    res.redirect(301, "/en");
  }
});

server.listen(PORT, () => {
  console.log(`SkyCat server listening on port ${PORT}`);
});
