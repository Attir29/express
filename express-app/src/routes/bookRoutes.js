import express from "express";
import {
  addBooksHandler,
  deleteBookByIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
} from "./handler.js";

const router = express.Router();

router.get("/books", getAllBooksHandler);

router.post("/books", addBooksHandler);

router.get("/books/:id", getBookByIdHandler);

router.put("/books/:id", updateBookByIdHandler);

router.delete("/books/:id", deleteBookByIdHandler);

router.get("/", (req, res) => {
  res.send("hello world!");
});

export default router;
