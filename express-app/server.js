import express from "express";

const app = express();

const port = 3000;

const books = [
  { id: "1", title: "1984", author: "George Orwell" },
  { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: "3", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

app.get("/", (req, res) => {
  res.send("success");
});

app.get("/books", getAllBooksHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
