const express = require("express");
const app = express();
const { PORT } = require("./config/server.config");
const apiRoute = require("./routes/search.route");
const connectedDb = require("./config/db.config");
app.use(express.json());
app.use(express.json({ urlencoded: true }));
app.use("/api", apiRoute);
app.listen(PORT, async () => {
  console.log(`The port is running on ${PORT}`);
  await connectedDb();
  console.log("Successfully connected to db");
});
