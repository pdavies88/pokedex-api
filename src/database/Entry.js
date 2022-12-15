const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllPokemon = () => {
  return DB.pokemon;
};

const createNewEntry = (newEntry) => {
  const isAlreadyAdded =
    DB.pokemon.findIndex((pokemon) => pokemon.name === newEntry.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.pokemon.push(newEntry);
  saveToDatabase(DB);
  return newEntry;
};

module.exports = { getAllPokemon, createNewEntry };
