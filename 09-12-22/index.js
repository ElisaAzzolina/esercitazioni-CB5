const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//pagina home
app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src/html" });
});

// SERVER - MONGOOSE
mongoose.connect("mongodb://127.0.0.1:27017/videoteca").then(
  app.listen(3000, () => {
    console.log("server is listening");
  })
);

// MODEL ATTORI
const actSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});

const Actor = mongoose.model("Actor", actSchema);

// MODEL REGISTI
const dirSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});
const Director = mongoose.model("Director", dirSchema);

// MODEL FILM
const dirFilm = new mongoose.Schema({
  nome: String,
  anno_produzione: String,
  genere: { type: String, default: "" },
  regista: String,
  protagonista: String,
  durata: { type: String, default: "0" },
  candidature_oscar: { type: Number, default: -1 },
  lingua_originale: { type: String, default: "" },
  produzione: { type: String, default: "" },
  sequel: { type: Boolean, default: null },
});
const Film = mongoose.model("Film", dirFilm);

// GET ATTORI - MONGODB
const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
app.get("/attori", getAllActors);

// POST ATTORE - MONGODB
const postActor = async (req, res) => {
  const actor = req.body;
  const newActor = new Actor(actor);

  try {
    await newActor.save();
    res.status(201).json(newActor);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.post("/attore", postActor);

//DELETE ATTORE - MONGODB
const deleteActor = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndDelete(id);
    res.status(200).json({ msg: "Attore eliminato." });
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.delete("/attore", deleteActor);

//PUT ATTORE - MONGODB
/* const putActor = async (req, res) => {
  const id = req.query.id;
  const body = { ...req.body };
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ msg: "Attore aggiornato!" });
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
app.put("/attore", putActor); */

/*----- REGISTI -----*/

// GET REGISTI - MONGODB
const getAllDirectors = async (req, res) => {
  try {
    const directors = await Director.find();
    res.status(200).json(directors);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
app.get("/registi", getAllDirectors);

// POST REGISTA - MONGODB
const postDirector = async (req, res) => {
  const director = req.body;
  const newDirector = new Director(director);

  try {
    await newDirector.save();
    res.status(201).json(newDirector);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.post("/regista", postDirector);

//DELETE REGISTA - MONGODB
const deleteDirector = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Director.findByIdAndDelete(id);
    res.status(200).json({ msg: "Regista eliminato." });
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.delete("/regista", deleteDirector);

/*----- FILM -----*/

// GET FILM - MONGODB
const getAllFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.status(200).json(films);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
app.get("/film", getAllFilms);

// POST REGISTA - MONGODB
const postFilm = async (req, res) => {
  const film = req.body;
  const newFilm = new Film(film);

  try {
    await newFilm.save();
    res.status(201).json(newFilm);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.post("/film", postFilm);

//DELETE REGISTA - MONGODB
const deleteFilm = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Film.findByIdAndDelete(id);
    res.status(200).json({ msg: "Film eliminato." });
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.delete("/film", deleteFilm);
