const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];



app.get("/repositories", (request, response) => {
  // const { title } = request.query;
  // const results = title 
  //   ? projects.filter(project => project.title.includes(title))
  //   : projects;

  return response.json(repositories);


});


app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const newRepository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(newRepository);  

  return response.json(newRepository)
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;


  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
    
  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found'})
  }

  const updatedRepository = {
    id,
    title,
    url,
    techs,
    // repository.likes
  };
  repositories[repositoryIndex] = updatedRepository;
  return response.json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found' })
  }
  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);
  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found'})
  }

  const oldRepository = repositories[repositoryIndex];
  let  { title, url, techs, likes } = oldRepository;
  likes += 1;
  console.log(likes);


  const updatedRepository = {
    id,
    title,
    url,
    techs,
    likes
  };
  repositories[repositoryIndex] = updatedRepository;
  return response.json(updatedRepository);

});

module.exports = app;
