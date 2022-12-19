const pokedexService = require("../services/pokedexService");

const getAllEntries = (req, res) => {
  // Query parameters can be used for filtering or pagination
  const { type } = req.query;
  try {
    const allEntries = pokedexService.getAllEntries({ type });
    res.send({ status: "OK", data: allEntries });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneEntry = (req, res) => {
  // URL Params extrapolation
  const {
    params: { pokedexId },
  } = req;
  if (!pokedexId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':pokedexId' can not be empty" },
    });
  }
  try {
    const entry = pokedexService.getOneEntry(pokedexId);
    res.send({ status: "OK", data: entry });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewEntry = (req, res) => {
  const { body } = req;
  if (!body.name || !body.type || !body.moves) {
    // Tell users about why the create request failed
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in the request body: 'name', 'type', 'moves'",
      },
    });
    return;
  }

  const newEntry = {
    name: body.name,
    type: body.type,
    moves: body.moves,
  };
  try {
    const createdEntry = pokedexService.createNewEntry(newEntry);
    res.status(201).send({ status: "OK", data: createdEntry });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneEntry = (req, res) => {
  const {
    body,
    params: { pokedexId },
  } = req;
  if (!pokedexId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':pokedexId' can not be empty" },
    });
  }
  try {
    const updatedEntry = pokedexService.updateOneEntry(pokedexId, body);
    res.send({ status: "OK", data: updatedEntry });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneEntry = (req, res) => {
  const {
    params: { pokedexId },
  } = req;
  if (!pokedexId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':pokedexId' can not be empty" },
    });
  }
  try {
    pokedexService.deleteOneEntry(pokedexId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllEntries,
  getOneEntry,
  createNewEntry,
  updateOneEntry,
  deleteOneEntry,
};
