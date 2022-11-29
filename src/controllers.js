import fastify from "fastify";

export async function LoginController(request, response) {
  try {
    const token = await response.jwtSign({name: "Ahmad"}, { expiresIn: "1m" });

    response.status(200).send({token: token});
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred");
  }
}

export async function AddBookController(request, response) {
  try {
    const { Book } = request.db.models;

    const newBook = await Book.create(request.body);

    response.status(201);

    return { success: true, message: `Uploaded with id: ${newBook.id}` };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function GetBooksController(request, response) {
  try {
    const { Book } = request.db.models;

    const books = await Book.find({});

    return books;
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function DeleteBookController(request, response) {
  try {
    // Applogik

    const { Book } = request.db.models;

    const { deletedCount } = await Book.deleteOne({
      title: request.body.title,
    });

    if (deletedCount === 0) {
      response.code(404);
      return { success: false, message: "Book could not be found!" };
    }

    return { success: true, message: "Book has been deleted!" };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}
