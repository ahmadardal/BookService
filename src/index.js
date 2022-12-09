import environment from "./utils/environment.js";
import fastify from "fastify";
import fastifyWebsocket from '@fastify/websocket';
import BookRoutes from "./routes.js";
import database from "./utils/db.js";
import Auth from "./utils/auth.js";

const server = fastify({ logger: true });

const start = async () => {
  try {

    await server.register(fastifyWebsocket);

    await server.register(database);

    await server.register(Auth);

    await server.register(BookRoutes);

    await server.listen({ port: environment.PORT });
    console.log("Server is running!!!!!!!!");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
