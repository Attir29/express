import express from "express";
import router from "./routes.js";

const app = express();

app.use(express.json());

const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
