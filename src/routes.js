import * as controllers from "./controllers.js";
import * as schemas from "./schemas.js";

async function BookRoutes(server, options) {
  server.route({
    method: "POST",
    url: "/books",
    schema: schemas.AddBookSchema,
    handler: controllers.AddBookController,
  });

  server.route({
    method: "GET",
    url: "/books",
    schema: schemas.GetBooksSchema,
    handler: controllers.GetBooksController,
  });

  server.route({
    method: "DELETE",
    url: "/books",
    schema: schemas.DeleteBookSchema,
    handler: controllers.DeleteBookController,
  });
}

export default BookRoutes;
