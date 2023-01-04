const Pokemon = require("../database/Entry");
const crypto = require("crypto");

const getAllEntries = (filterParams) => {
  const allEntries = Pokemon.getAllPokemon(filterParams);
  return allEntries;
};

const getOneEntry = (pokedexId) => {
  const entry = Pokemon.getOneEntry(pokedexId);
  return entry;
};

const createNewEntry = (newEntry) => {
  const pokemonToInsert = {
    ...newEntry,
    id: crypto.randomUUID(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdEntry = Pokemon.createNewEntry(pokemonToInsert);
  return createdEntry;
};

const updateOneEntry = (pokedexId, changes) => {
  const updatedEntry = Pokemon.updateOneEntry(pokedexId, changes);
  return updatedEntry;
};

const deleteOneEntry = (pokedexId) => {
  Pokemon.deleteOneEntry(pokedexId);
};

module.exports = {
  getAllEntries,
  getOneEntry,
  createNewEntry,
  updateOneEntry,
  deleteOneEntry,
};
