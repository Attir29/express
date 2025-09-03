import { books } from "./data.js";

export const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

export const addBooksHandler = (req, res) => {
  const { name, author } = req.body;

  const id = Date.now();

  const newBook = { id, name, author };

  books.push(newBook);
  res.status(201).json({
    status: "success",
    message: "Book added successfully",
    data: {
      book: newBook,
    },
  });
};
