const express = require("express");
const cors = require("cors");

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
});

/**
 * A rota deve receber title, url e techs dentro do corpo da requisição, sendo a 
 * URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele 
 * deve ser armazenado dentro de um objeto no seguinte formato: 
 * { id: "uuid", 
 * title: 'Desafio Node.js', 
 * url: 'http://github.com/...', 
 * techs: ["Node.js", "..."], 
 * likes: 0 }; 
 * Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
 */

app.post("/repositories", (request, response) => {
  // TODO
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
