const { v4: uuid } = require("uuid");
const Pokemon = require("../database/Entry");

const getAllEntries = () => {
  const allEntries = Pokemon.getAllPokemon();
  return allEntries;
};

const getOneEntry = () => {
  return;
};

const createNewEntry = (newEntry) => {
  const pokemonToInsert = {
    ...newEntry,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdEntry = Pokemon.createNewEntry(pokemonToInsert);
  return createdEntry;
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
