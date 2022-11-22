import fastify from "fastify";

export async function AddBookController(request, response) {
  try {

    //const Book = request.db.models.Book

    const { Book } = request.db.models

    const newBook = await Book.create(request.body);
    
    response.status(201)

    return newBook;

  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function GetBooksController(request, response) {
  try {

    // Applogik
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function DeleteBookController(request, response) {
  try {
    // Applogik
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}
