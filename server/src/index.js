const express = require("express");
const app = express();

const { PORT } = require("./config/server.config");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`The port is running on ${PORT}`);
});
