const express = require("express");
const v1PokedexRouter = require("./v1/routes/pokedexRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/pokedex", v1PokedexRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
