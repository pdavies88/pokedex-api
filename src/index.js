const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");
const v1PokedexRouter = require("./v1/routes/pokedexRoutes");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// Caching can be scaled accordingly
app.use(cache("2 seconds"));
app.use("/api/v1/pokedex", v1PokedexRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
