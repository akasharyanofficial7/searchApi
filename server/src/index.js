const express = require("express");
const app = express();
const { PORT } = require("./config/server.config");
const apiRoute = require("./routes/search.route");
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`The port is running on ${PORT}`);
});
