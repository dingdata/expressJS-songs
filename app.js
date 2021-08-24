const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

/**Router codes **/
const songRouter = require("./routes/songs.route");
app.use("/songs", songRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my homepage");
});

module.exports = app;
