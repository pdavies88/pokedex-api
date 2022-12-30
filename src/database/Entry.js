const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Squirtle
 *         type:
 *           type: string
 *           example: Water
 *         moves:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Bubble", "Bubble Gun", "Tackle", "Leer"]
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const getAllPokemon = (filterParams) => {
  try {
    let pokemon = DB.pokemon;
    if (filterParams.type) {
      return DB.pokemon.filter((pokemon) =>
        pokemon.type.toLowerCase().includes(filterParams.type)
      );
    }
    return pokemon;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneEntry = (pokedexId) => {
  try {
    const pokemon = DB.pokemon.find(
      (pokemon) => pokemon.name.toLowerCase() === pokedexId.toLowerCase()
    );
    if (!pokemon) {
      throw {
        status: 400,
        message: `Can't find pokemon with the name '${pokedexId}'`,
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
      DB.pokemon.findIndex(
        (pokemon) => pokemon.name.toLowerCase() === newEntry.name.toLowerCase()
      ) > -1;
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

const updateOneEntry = (pokedexId, changes) => {
  try {
    const indexForUpdate = DB.pokemon.findIndex(
      (pokemon) => pokemon.name.toLowerCase() === pokedexId.toLowerCase()
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find pokemon with the name '${pokedexId}'`,
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

const deleteOneEntry = (pokedexId) => {
  try {
    const indexForDeletion = DB.pokemon.findIndex(
      (pokemon) => pokemon.name.toLowerCase() === pokedexId.toLowerCase()
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find pokemon with the name '${pokedexId}'`,
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
  getOneEntry,
  createNewEntry,
  updateOneEntry,
  deleteOneEntry,
};
