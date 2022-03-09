// este archivo tendrá la declaración y lógica de los controllers, es decir, las funciones que gestionan la ruta
import { v4 as uuidv4 } from "uuid";
import {
  retrieveBooks,
  retrieveBookByISBN,
  createBook,
  deleteBook,
} from "./book.model.js";

export const getBooksCtrl = async (req, res) => {
  const books = await retrieveBooks();
  res.json(books);
};

export const getBookByISBNCtrl = async (req, res) => {
  //aqui deberé llamar al modelo para obtener un solo libro
  const { ISBN } = req.params;
  const book = await retrieveBookByISBN(ISBN);
  if (book !== undefined) res.json(book);
  else res.sendStatus(404);
};

export const createBookCtrl = async (req, res) => {
  //recuperamos el body
  const newBook = {
    ...req.body,
    id: uuidv4(),
  };
  //habria que comprobar que el ISBN no existe y si es asi, crearlo, sino, mandar un mensaje de error al usuario
  //creo el libro en la base de datos llamando a la función del modelo
  await createBook(newBook);
  res.status(201).json(newBook);
};

export const deleteBookCtrl = async (req, res) => {
  //recupero del body el ISBN
  const { ISBN } = req.body;
  await deleteBook(ISBN);
  res
    .status(204)
    .json({ mensaje: `Se ha eliminado el libro con ISBN: ${ISBN}` });
};
