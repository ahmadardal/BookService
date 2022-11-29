import validateEmail from "./utils/validateEmail.js";

export async function LoginController(request, response) {
  try {
    const { User } = request.db.models;

    const user = await User.findOne({ email: request.body.email });

    if (!user) {
      response.status(404);
      return "No user exists with this email address!";
    }

    if (user.password !== request.body.password) {
      response.status(403);
      return "You have entered the wrong password, please try again!";
    }

    const jwtToken = await response.jwtSign({
      name: user.name,
      email: user.email,
      userId: user.id,
    });

    const responseData = {
      token: jwtToken,
    };

    response.status(200).send(responseData);
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
  }
}

export async function RegisterController(request, response) {
  try {
    // Validera mejl, lösenord osv

    const isEmailValid = validateEmail(request.body.email);

    if (!isEmailValid) {
      response.status(400);
      return "Invalid email address!";
    }

    // Kolla om det finns dubletter i databasen

    const { User } = request.db.models;

    const existsUser = User.find({ email: request.body.email });

    // Returnera om det finns en användare
    if (existsUser) {
      response.status(409);
      return "User with email already exists!";
    }

    // Skapa en användare i databasen
    await User.create(request.body);

    response.status(201);

    return {
      success: true,
      message: "Successfully registered user!",
    };
  } catch (error) {
    request.log.error(error);
    await response.status(500).send("An error occurred!");
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

    const {userId} = request.user;

    console.log(userId);

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
