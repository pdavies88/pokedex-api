# Local Pokedex API

## Node, Express, and Javascript Simple Localized CRUD API

### Getting Started

- `npm i` to install packages
- `npm run dev` to run localized API
- API will be available at http://localhost:3000/ unless another port is specified during the `npm run dev` command

### Endpoints Available

- GET `/api/v1/pokedex`
  - Filter available for `type`
- GET `/api/v1/pokedex/:pokedexId`
- POST `/api/v1/pokedex`
- PATCH `/api/v1/pokedex/:pokedexId`
- DELETE `/api/v1/pokedex/:pokedexId`
