const { v4: uuid } = require("uuid");
const Pokemon = require("../database/Entry");

const getAllEntries = () => {
  const allEntries = Pokemon.getAllPokemon();
  return allEntries;
};

const getOneEntry = (entryId) => {
  const entry = Pokemon.getOneEntry(entryId);
  return entry;
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

const updateOneEntry = (entryId, changes) => {
  const updatedEntry = Pokemon.updateOneEntry(entryId, changes);
  return updatedEntry;
};

const deleteOneEntry = (entryId) => {
  Pokemon.deleteOneEntry(entryId);
};

module.exports = {
  getAllEntries,
  getOneEntry,
  createNewEntry,
  updateOneEntry,
  deleteOneEntry,
};
