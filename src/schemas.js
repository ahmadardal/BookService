

export const AddBookSchema = {

    body: {
        type: "object",
        required: ["author", "year", "title", "isbn"],
        properties: {
            author: { description: "Name of the author", type: "string" },
            year: { description: "Year the book was published", type: "number"},
            title: { description: "Title of the book", type: "string" },
            isbn: { description: "ISBN-code of the book", type: "string" },
        }
    }


}