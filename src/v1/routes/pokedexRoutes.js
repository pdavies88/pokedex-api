const express = require("express");
const pokedexController = require("../../controllers/pokedexController");

const router = express.Router();

router.get("/", pokedexController.getAllEntries);

router.get("/:pokedexId", pokedexController.getOneEntry);

router.post("/", pokedexController.createNewEntry);

router.patch("/:pokedexId", pokedexController.updateOneEntry);

router.delete("/:pokedexId", pokedexController.deleteOneEntry);

module.exports = router;
