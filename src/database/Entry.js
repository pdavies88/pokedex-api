const DB = require("./db.json");

const getAllPokemon = () => {
  return DB.pokemon;
};

module.exports = { getAllPokemon };
