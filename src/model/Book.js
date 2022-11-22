import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  author: { type: String, required: true },
  year: { type: Number, required: true },
  title: { type: String, required: true },
  isbn: { type: String, required: true },
});

export const Book = model("Book", BookSchema);
