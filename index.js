const express = require("express");
const builder = require("xmlbuilder2");
const provider = require("./providers/TRI-events.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

app.get("/", async (req, res) => {
  if (process.env.WEBPAGE_URL !== undefined) {
    const data = await provider.scrapper(process.env.WEBPAGE_URL);
    var xml = builder.create(data, { headless: true }).end({ pretty: true });

    res.set("Content-Type", "text/xml");
    res.send(xml);
  } else {
    const errorMsg = "WEBPAGE_URL env var missing";
    console.error(errorMsg);
    res.send(errorMsg);
  }
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`website scraper: listening on port ${port}`);
});
