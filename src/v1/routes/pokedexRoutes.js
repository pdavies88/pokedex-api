const express = require("express");
const pokedexController = require("../../controllers/pokedexController");

const router = express.Router();

/**
 * @openapi
 * /api/v1/pokedex:
 *   get:
 *     tags:
 *       - PokeDex
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: The type of a Pokemon
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Pokemon"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"

 */

router.get("/", pokedexController.getAllEntries);

router.get("/:pokedexId", pokedexController.getOneEntry);

router.post("/", pokedexController.createNewEntry);

router.patch("/:pokedexId", pokedexController.updateOneEntry);

router.delete("/:pokedexId", pokedexController.deleteOneEntry);

module.exports = router;
