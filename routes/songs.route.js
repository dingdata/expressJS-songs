const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  res.send(songs);
});

router.post("/", (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist,
  };
  songs.push(newSong);
  res.status(200).send(newSong);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(typeof id);
  const results = songs.find((song) => song.id === id);
  res.send(results);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const toBeModifiedSong = songs.find((song) => song.id === id);
  console.log(req.body);

  toBeModifiedSong.name = req.body.name;
  toBeModifiedSong.artist = req.body.artist;
  res.send(toBeModifiedSong);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const songToDelete = songs.find((song) => song.id === id);

  const indexToDelete = songs.indexOf(songToDelete);
  songs.splice(indexToDelete, 1);
  console.log(songs);
  res.status(200).send(songToDelete);
});

module.exports = router;
