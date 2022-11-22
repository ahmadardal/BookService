export default async function AddBookController(request, response) {
  try {

    // Applogik

  } catch (error) {
    fastify.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function TestController(request, response) {
    
}