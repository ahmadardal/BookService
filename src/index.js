import environment from "./environment.js";
import fastify from "fastify";

const server = fastify();

var TodoList = [];

// Route
server.get("/todos", async (request, response) => {
  return TodoList;
});

server.post("/todos/:name", async (request, response) => {
  if (request.params.name == "") {
    response.status(400);
    return "Please enter a valid name!";
  }

  TodoList.push(request.params.name);

  response.status(201);

  return "Successfully added todo!";
});

server.delete("/todos/:name", async (request, response) => {
  if (request.params.name == "") {
    response.status(400);
    return "Please enter a valid name to remove!";
  }

  const todoToRemove = TodoList.find((todo) => todo === request.params.name);

  if (todoToRemove === undefined) {
    response.code(404);
    return "Todo could not be found!";
  }

  TodoList = TodoList.filter((todo) => todo != todoToRemove);

  return "Successfully removed todo!";
});

const start = async () => {
  try {
    await server.listen({ port: environment.PORT });
    console.log("Server is running!!!!!!!!");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
