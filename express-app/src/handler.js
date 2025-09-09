import { books } from "./data.js";

export const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

export const addBooksHandler = (req, res) => {
  const { name, author } = req.body;

  if (!name || !name.trim() || !author || !author.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Name and author are required",
    });
  }

  const id = Date.now();

  const newBook = { id, name, author };

  books.push(newBook);

  return res.status(201).json({
    status: "success",
    message: "Book added successfully",
    data: {
      book: newBook,
    },
  });
};

export const getBookByIdHandler = (req, res) => {
  const { id } = req.params;

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Book not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: { book },
  });
};

export const updateBookByIdHandler = (req, res) => {
  const { id } = req.params;
  const { name, author } = req.body;

  if (!name || !name.trim() || !author || !author.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Name and author are required",
    });
  }

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Book not found",
    });
  }

  book.name = name;
  book.author = author;

  res.status(200).json({
    status: "success",
    message: "Book updated successfully",
    data: { book },
  });
};

export const deleteBookByIdHandler = (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex((b) => b.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Book not found",
    });
  }

  books.splice(bookIndex, 1);

  return res.status(200).json({
    status: "success",
    message: "Book deleted successfully",
  });
};
