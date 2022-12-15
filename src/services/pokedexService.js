const Pokemon = require("../database/Entry");

const getAllEntries = () => {
  const allEntries = Pokemon.getAllPokemon();
  return allEntries;
};

const getOneEntry = () => {
  return;
};

const createNewEntry = () => {
  return;
};

const updateOneEntry = () => {
  return;
};

const deleteOneEntry = () => {
  return;
};

module.exports = {
  getAllEntries,
  getOneEntry,
  createNewEntry,
  updateOneEntry,
  deleteOneEntry,
};
