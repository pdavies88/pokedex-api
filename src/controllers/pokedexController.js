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
  const createdEntry = pokedexService.createNewEntry();
  res.send("Create a new entry");
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
