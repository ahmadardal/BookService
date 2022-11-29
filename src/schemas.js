export const LoginSchema = {
  body: {
    type: "object",
    required: ["email", "password",],
    properties: {
      email: { description: "Email of the user", type: "string" },
      password: { description: "Password of the user", type: "string" },
    },
  },
  response: {
    200: {
      description: "Success response",
      type: "object",
      properties: {
        token: { type: "string" },
      },
    },
  },
};



export const AddBookSchema = {
  body: {
    type: "object",
    required: ["author", "year", "title", "isbn"],
    properties: {
      author: { description: "Name of the author", type: "string" },
      year: { description: "Year the book was published", type: "number" },
      title: { description: "Title of the book", type: "string" },
      isbn: { description: "ISBN-code of the book", type: "string" },
    },
  },
  response: {
    201: {
      description: "Success response",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};

export const GetBooksSchema = {
  response: {
    200: {
      description: "List of all books",
      type: "array",
      items: {
        type: "object",
        properties: {
          author: { description: "Name of the author", type: "string" },
          year: { description: "Year the book was published", type: "number" },
          title: { description: "Title of the book", type: "string" },
          isbn: { description: "ISBN-code of the book", type: "string" },
        },
      },
    },
  },
};

export const DeleteBookSchema = {
  body: {
    type: "object",
    required: ["title"],
    properties: {
      title: { description: "Title of the book to remove", type: "string" },
    },
  },
  response: {
    200: {
      description: "Delete status",
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" },
      },
    },
  },
};
