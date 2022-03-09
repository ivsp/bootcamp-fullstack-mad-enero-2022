import express from "express";
import cors from "cors";
import booksRouter from "./books/book.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", booksRouter); // asocio el router de los vuelos al app

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server listening on port ${port}`));
