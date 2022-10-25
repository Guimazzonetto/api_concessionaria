const express = require("express");

const app = express();

const api_config = require("./config/api.json");
const cars_route = require("./routes/cars.js");

app.listen(api_config.port, console.log(`App lintening on port ${api_config.port}`));
app.use(express.json());
app.use(`${api_config.version}/concessionaria`, cars_route);