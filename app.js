const express = require("express");
const app = express();
// const data = required("./data");

app.get("/", (req, res) => {
  //   res.send("String Hello World!");
  res.json({ message: "JSON Hi!" });
});

// app.get("/songs", (req, res) => {
//   songs = [
//     {
//       name: "someSongName",
//       artist: "someSongArtist",
//     },
//     {
//       name: "anotherSongName",
//       artist: "anotherArtist",
//     },
//   ];
//   res.send();
// });

// app.post("/", (req, res) => {
//   console.log(req);
//   res.send(`Hello, i got a ${req.method}  ${req.body} request`);
// });

// app.put("/", (req, res) => {
//   res.send(`Hello, i got a ${req.method} request`);
// });

// app.delete("/", (req, res) => {
//   res.send(`Hello, i got a ${req.method} request`);
// });

// app.get("/users/:userId/books/:bookId", (req, res) => {
//   res.send(req.params);
// });

// const server = app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

module.exports = app;
