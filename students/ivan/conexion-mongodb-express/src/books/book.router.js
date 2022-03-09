import express from "express";
import {
  getBooksCtrl,
  getBookByISBNCtrl,
  deleteBookCtrl,
  createBookCtrl,
} from "./book.controller.js";

const booksRouter = express.Router();

booksRouter
  .route("/") //definimos las rutas en el router sin poner el contexto del recurso. Esto se hace en el app.js
  .get(getBooksCtrl)
  .post(createBookCtrl)
  .delete(deleteBookCtrl);

booksRouter
  .route("/:ISBN") //definimos el param que le vamos a dar
  .get(getBookByISBNCtrl);

export default booksRouter;
