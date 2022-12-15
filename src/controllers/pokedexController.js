const pokedexService = require("../services/pokedexService");

const getAllEntries = (req, res) => {
  const allEntries = pokedexService.getAllEntries();
  res.send({ status: "OK", data: allEntries });
};

const getOneEntry = (req, res) => {
  const entry = pokedexService.getOneEntry();
  res.send("Get an existing entry");
};

const createNewEntry = (req, res) => {
  const { body } = req;
  if (!body.name || !body.type || !body.moves) {
    return;
  }

  const newEntry = {
    name: body.name,
    type: body.type,
    moves: body.moves,
  };

  const createdEntry = pokedexService.createNewEntry(newEntry);
  res.status(201).send({ status: "OK", data: createdEntry });
};

const updateOneEntry = (req, res) => {
  const updatedEntry = pokedexService.updateOneEntry();
  res.send("Update an existing entry");
};

const deleteOneEntry = (req, res) => {
  pokedexService.deleteOneEntry();
  res.send("Delete an existing entry");
};

module.exports = {
  getAllEntries,
  getOneEntry,
  createNewEntry,
  updateOneEntry,
  deleteOneEntry,
};
