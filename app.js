const express = require("express");
const app = express();
app.use(express.json());
// const data = required("./data");

const songs = [
  {
    id: 1,
    name: "Pink Moon",
    artist: "Nick Drake",
  },
  {
    id: 2,
    name: "anotherSongName",
    artist: "anotherArtist",
  },
  {
    id: 3,
    name: "SongNumber3",
    artist: "Artist3",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my homepage");
});

app.get("/songs", (req, res) => {
  res.send(songs);
});

app.post("/songs", (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist,
  };
  songs.push(newSong);
  res.status(200).send(newSong);
});

app.get("/songs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(typeof id);
  const results = songs.find((song) => song.id === id);
  res.send(results);
});

app.put("/songs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const toBeModifiedSong = songs.find((song) => song.id === id);
  console.log(req.body);

  toBeModifiedSong.name = req.body.name;
  toBeModifiedSong.artist = req.body.artist;
  res.send(toBeModifiedSong);
});

app.delete("/songs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const songToDelete = songs.find((song) => song.id === id);

  const indexToDelete = songs.indexOf(songToDelete);
  songs.splice(indexToDelete, 1);
  console.log(songs);
  res.status(200).send(songToDelete);
});

module.exports = app;
