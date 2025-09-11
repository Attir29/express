import express from "express";
import router from "./routes/bookRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

const port = 3000;

app.use(router);

app.use(productRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
