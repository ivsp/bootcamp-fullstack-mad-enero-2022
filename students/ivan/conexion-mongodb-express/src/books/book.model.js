import { MongoClient } from "mongodb"; // paso 4

const URI =
  "mongodb+srv://demo_libros:demo_libros@cluster0.ertvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DB_NAME = "library";
const COLLECTION_NAME = "libraryCollection";

const client = new MongoClient(URI); //paso 5

//función que devuelve los vuelos
export const retrieveBooks = async () => {
  try {
    await client.connect(); //realizamos una conexión con el cliente
    const db = client.db(DB_NAME); //seleccionamos la BBDD de la conexión
    const booksCollection = db.collection(COLLECTION_NAME); //seleccionamos la colección con la que queremos operar
    const opt = {
      projection: { _id: 0 }, //aqui lo que hacemos es ocultar la propiedad _id del elemento
    };
    //una vez definido lo anterior, puedo hacer opraciones con la collection
    const books = await booksCollection.find({}, opt).toArray(); //en el método find le meto la queri, que no hay y las options. Ejecuto el to Array para que me de un array de valores
    return books;
  } catch (err) {
    console.error("Retrieve Flights error: ", err);
  } finally {
    await client.close(); // paso 10. Cerramos la conexión
  }
};

export const retrieveBookByISBN = async (ISBN) => {
  try {
    await client.connect(); //realizamos una conexión con el cliente
    const db = client.db(DB_NAME); //seleccionamos la BBDD de la conexión
    const booksCollection = db.collection(COLLECTION_NAME); //seleccionamos la colección con la que queremos operar
    const opt = {
      projection: { _id: 0 }, //aqui lo que hacemos es ocultar la propiedad _id del elemento
    };
    const query = { ISBN };
    //una vez definido lo anterior, puedo hacer opraciones con la collection
    const books = await booksCollection.findOne(query, opt); //en el método find le meto la queri y las options.
    return books;
  } catch (err) {
    console.error("Retrieve Flights error: ", err);
  } finally {
    await client.close(); // paso 10. Cerramos la conexión
  }
};

export const createBook = async (book) => {
  try {
    await client.connect(); // paso 6
    const db = client.db(DB_NAME); // paso 7
    const booksCollection = db.collection(COLLECTION_NAME); // paso 8
    // a partir de aqui ya puedo hacer operaciones con la collection
    await booksCollection.insertOne({ ...book }); // paso 9 Pongo el spread operator para mandar una copia
  } catch (err) {
    console.error("Retrieve Flight By id error: ", err);
  } finally {
    await client.close(); // paso 10. Cerramos la conexión
  }
};

export const deleteBook = async (ISBN) => {
  try {
    await client.connect(); // paso 6
    const db = client.db(DB_NAME); // paso 7
    const booksCollection = db.collection(COLLECTION_NAME); // paso 8
    const query = { ISBN };
    // a partir de aqui ya puedo hacer operaciones con la collection
    await booksCollection.deleteOne(query); // paso 9
  } catch (err) {
    console.error("Retrieve Flight By id error: ", err);
  } finally {
    await client.close(); // paso 10. Cerramos la conexión
  }
};
