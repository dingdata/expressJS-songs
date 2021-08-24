const request = require("supertest");
const app = require("../routes/songs.route");

describe("POST /songs", () => {
  it("should return new Song ", async () => {
    const newSong = {
      name: "newSongName2",
      artist: "newSongArtist",
    };
    const response = await request(app)
      .post("/songs")
      .send(newSong)
      .expect(200);
    expect(response.body.name).toEqual("newSongName2");
    expect(response.body.artist).toEqual("newSongArtist");
  });

  it("GET /songs/:id should return the correct song", async () => {
    const expectedSong = { name: "Pink Moon", artist: "Nick Drake" };

    const { body: actualSong } = await request(app).get("/songs/1").expect(200);

    expect(actualSong).toMatchObject(expectedSong);
  });

  it("PUT /songs/:id should returned modified song", async () => {
    const actualSong = {
      name: "ActualSongName2",
      artist: "ActualSongArtist",
    };
    const response = await request(app)
      .post("/songs")
      .send(actualSong)
      .expect(200);

    const modifiedSong = {
      name: "ModifiedSongName2",
      artist: "ModifiedSongArtist",
    };
    const { body: retrievedModified } = await request(app)
      .put("/songs/1")
      .send(modifiedSong)
      .expect(200);
    expect(retrievedModified).toMatchObject(modifiedSong);
  });

  it("should return deleted song after deletion", async () => {
    const toBeDeletedSong = {
      name: "ToBeDeletedSongName2",
      artist: "ToBeDeletedSongArtist2",
    };
    const response = await request(app)
      .post("/songs")
      .send(toBeDeletedSong)
      .expect(200);
    const idToBeDeleted = response.body.id;

    const { body: deletedSong } = await request(app)
      .delete(`/songs/${idToBeDeleted}`)
      .expect(200);
    expect(deletedSong).toMatchObject(toBeDeletedSong);
  });
});
