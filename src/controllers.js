import fastify from "fastify";

export async function AddBookController(request, response) {
  try {
    request.log.info("Request received!!!");

    return request.body;
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
