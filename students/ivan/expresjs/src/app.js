import express from "express";
import { argv } from "process";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { writeFileSync, mkdirSync } from "fs";

/**
 * EJERCICIO 1
 */

/*
const app = express(); //llamamos a la app

const port = argv[2]; //defino el puerto

app.get("/", (req, res) => {
  res.send("hello world"); //esta función se va a crear cada vez que un cliente llame por GET a la URL
});

//una vez definidas todas las rutas, ahora pongo a funcionar el server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
*/

/**
 * EJERCICIO 2
 */
const pr
const app = express(); //llamamos a la app

const port = argv[2]; //defino el puerto
app.use(express.json()); // for parsing application/json
app.use(
  express.urlencoded({
    extended: true,
  })
); // for parsing application/x-www-form-urlencoded

//voy a inicializar el archivo donde guardo los datos si este no existe. Pero si existen, no quiero que me los ejecute
if(){
mkdirSync("data");
writeFileSync("../data/products.json", "[]"); //el encoding por defecto es el utf8
}

app.get("/products", async (req, res) => {
  const products = await fs.readFile("../data/products.json", {
    encoding: "utf8",
  }); //esta función se va a crear cada vez que un cliente llame por GET a la URL
  res.json(JSON.parse(products));
});

app.post("/products", async (req, res) => {
  const getProductDocumen = await fs.readFile("../data/products.json", {
    encoding: "utf8",
  });
  const objProduct = JSON.parse(getProductDocumen);
  const product = {
    ...req.body,
    id: uuidv4(), //creo una id aleatoria
  };
  objProduct.push(product);
  await fs.writeFile(
    "../data/products.json",
    JSON.stringify(objProduct, null, 2)
  ); // con el await no mando la respuesta al usuario hasta que no se resuelve el await
  res.json(req.body);
});
//una vez definidas todas las rutas, ahora pongo a funcionar el server
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

/**
 * EJERCICIO 3
 */

/**Crear un endpoint GET con path params para los productos
 *  (/products/:id). Este endpoint deberá devolver el objeto
 * de la información del producto que tenga el id o 404 si no existe el producto.*/
app.get("/products/:id/", async (req, res) => {
  const products = await fs.readFile("../data/products.json", {
    encoding: "utf8",
  }); //esta función se va a crear cada vez que un cliente llame por GET a la URL
  const arrProducts = JSON.parse(products);
  const selectProducts = arrProducts.filter((p) => p.id === req.params.id);
  res.json(selectProducts);
});

/**
 * Crear un endpoint DELETE con path params para los productos
 *  (/products/:id). Este endpoint deberá eliminar el objeto de la
 * lista de productos del producto que tenga el id o 404 si no existe el producto.
 */
app.delete("/products/:id/", async (req, res) => {
  const products = await fs.readFile("../data/products.json", {
    encoding: "utf8",
  });
  const arrProducts = JSON.parse(products);
  const existProduct = arrProducts.some((p) => p.id === req.params.id);

  if (existProduct) {
    const selectProducts = arrProducts.findIndex((p) => p.id === req.params.id);
    arrProducts.splice(selectProducts, 1);
    console.log(selectProducts);
    await fs.writeFile("../data/products.json", JSON.stringify(arrProducts));
    res.json("The object has been remove succesfully");
  } else {
    res.send("Err 404");
  }
});

/**Crear un endpoint PATCH con path params para los productos
 *  (/products/:id). Este endpoint recuperará del body la
 * información parcial que se quiere editar, buscará el
 * producto en la lista y modificará las cosas que hayan
 * cambiado del producto que tenga el id o 404 si no existe el producto.
 */
app.patch("/products/:id", async (req, res) => {
  const getProductDocumen = await fs.readFile("../data/products.json", {
    encoding: "utf8",
  });
  const arrProduct = JSON.parse(getProductDocumen);
  const changes = req.body;
  const product = arrProduct.find((p) => p.id === req.params.id);
  Object.assign(product, changes);
  await fs.writeFile(
    "../data/products.json",
    JSON.stringify(arrProduct, null, 2)
  );
  res.json("The product has been modify succesfully");
});
