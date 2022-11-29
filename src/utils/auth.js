import FastifyJwt from "@fastify/jwt";
import fp from "fastify-plugin";

async function Auth(server, options) {
  await server.register(FastifyJwt, {
    secret: "Hello123",
    sign: {
      expiresIn: "15m",
    },
  });


  await server.decorate("authenticate", async (request, response) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      response.send(err);
    }
  });

}

export default fp(Auth);
