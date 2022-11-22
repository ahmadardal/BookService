import mongoose from "mongoose";
import fp from "fastify-plugin";
import Book from "../model/Book.js";

async function database(server, options) {
  try {
    mongoose.connection.on("connected", () => {
      server.log.info({ actor: "MongoDB" }, "connected!!");
    });

    mongoose.connection.on("disconnected", () => {
      server.log.info({ actor: "MongoDB" }, "disconnected!!");
    });

    await mongoose.connect(
      "mongodb+srv://ahmadardal:Ahmed123@cluster0.khlxn.mongodb.net/?retryWrites=true&w=majority"
    );

    const models = { Book };

    server.addHook("onRequest", async (request, response) => {
      request.db = { models };
    });

  } catch (error) {}
}

export default fp(database);