import mongoose from "mongoose";

async function database(fastify, options) {
  try {
    mongoose.connection.on("connected", () => {
      fastify.log.info({ actor: "MongoDB" }, "connected!!");
    });

    mongoose.connection.on("disconnected", () => {
        fastify.log.info({ actor: "MongoDB" }, "disconnected!!");
    })

    await mongoose.connect(
      "mongodb+srv://ahmadardal:Ahmed123@cluster0.khlxn.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {}
}
