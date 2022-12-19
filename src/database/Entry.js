const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllPokemon = () => {
  try {
    return DB.pokemon;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOnePokemon = (entryId) => {
  try {
    const pokemon = DB.pokemon.find((pokemon) => pokemon.id === entryId);
    if (!pokemon) {
      throw {
        status: 400,
        message: `Can't find pokemon with the id '${entryId}'`,
      };
    }
    return pokemon;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewEntry = (newEntry) => {
  try {
    const isAlreadyAdded =
      DB.pokemon.findIndex((pokemon) => pokemon.name === newEntry.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Pokemon with the name '${newEntry.name}' already exists`,
      };
    }

    DB.pokemon.push(newEntry);
    saveToDatabase(DB);
    return newEntry;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOnePokemon = (entryId, changes) => {
  try {
    const indexForUpdate = DB.pokemon.findIndex(
      (pokemon) => pokemon.id === entryId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find pokemon with the id '${entryId}'`,
      };
    }
    const updatedEntry = {
      ...DB.pokemon[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.pokemon[indexForUpdate] = updatedEntry;
    saveToDatabase(DB);
    return updatedEntry;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOnePokemon = (entryId) => {
  try {
    const indexForDeletion = DB.pokemon.findIndex(
      (pokemon) => pokemon.id === entryId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find pokemon with the id '${entryId}'`,
      };
    }
    DB.pokemon.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllPokemon,
  getOnePokemon,
  createNewEntry,
  updateOnePokemon,
  deleteOnePokemon,
};
