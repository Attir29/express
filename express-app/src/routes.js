import express from "express";
import { getAllBooksHandler } from "./handler.js";
import { addBooksHandler } from "./handler.js";

const router = express.Router();

router.get("/books", getAllBooksHandler);

router.post("/books", addBooksHandler);

router.get("/", (req, res) => {
  res.send("hello world!");
});

export default router;
