import environment from "./utils/environment.js";
import fastify from "fastify";
import BookRoutes from "./routes.js";

const server = fastify({logger: true});



const start = async () => {
  try {

    await server.register(BookRoutes)

    await server.listen({ port: environment.PORT });
    console.log("Server is running!!!!!!!!");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
