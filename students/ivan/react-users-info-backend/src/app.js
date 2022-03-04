import express from "express";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  accessSync,
  constants,
} from "fs";

const FILE_PATH = "./data/users.json";
const PATH = "/users";
const app = express();
const port = 4000;
app.use(express.json()); // esto procesa el body en formato JSON y asi lo puedo leer en la request

// inicializar el archivo si NO existe
try {
  accessSync(FILE_PATH, constants.R_OK | constants.W_OK); //pregunto si tengo permisos de lectur y escritura
} catch (err) {
  console.warn("Error al acceder al archivo: ", err);
  console.warn("Creando un archivo con un array vacio...");
  mkdirSync("data"); //¿cómo controlo si la carpeta ya existe?
  writeFileSync(FILE_PATH, "[]");
}
const users = JSON.parse(readFileSync(FILE_PATH, { encoding: "utf8" }));
console.log(users);

app.get(PATH, (req, res) => {
  res.status(200);
  res.json(users);
});

// app.get(`${PATH}/user/:id`, async (req, res) => {
//   const selectedUser = users.filter((u) => u.id === req.params.id);
//   if (selectedUser === []) {
//     console.log(req.params.id);
//     console.log(users);
//     console.log(selectedUser);
//     res
//       .status(404)
//       .json({ error: "No se ha encontrado ningun usuario con ese ID" });
//   } else {
//     res.status(200);
//     res.json(selectedUser);
//   }
// });

app.post(PATH, async (req, res) => {
  //1. proceso el body (gracias al express.json()) req.body NO es undefined
  console.log("ll");
  console.log(req.body);
  const existUser = users.findIndex((u) => u.username === req.body.username);
  // console.log(existUser);
  if (existUser === -1) {
    res.status(400).json({ error: "El usuario ya existe" });
  } else {
    //2. creo un nuevo usuario
    const id = uuidv4();
    const user = {
      ...req.body,
      id, // esto es lo mismo que poner id:id
    };
    //3. añado el usuario al array
    users.push(user);
    await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));
    //4. devolver el usuario creado
    res.status(201);
    res.json(user);
  }
});

app.delete(`${PATH}/:id/`, async (req, res) => {
  //1. proceso el body (gracias al express.json()) req.body NO es undefined
  console.log(req);
  console.log(users);
  const existUser = users.findIndex((u) => u.id === req.params.id);
  if (existUser !== -1) {
    users.splice(existUser, 1);
    await fs.writeFile(FILE_PATH, JSON.stringify(users));
    res.status(200);
    res.json("El usuario ha sido eliminado");
  } else {
    res.status(404).json({ error: "El usuario no existe" });
  }
});

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});

/*
app.post('/users', async (req, res) => {

    dat.push({
        id: uuidv4(),
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        country: req.body.country,
        img: req.body.img,
        email: req.body.email
    })

    const addUser = await fs.writeFile('./users.json', JSON.stringify(dat, null, 2), (err, dat) => {
        if (err) {
            console.log('404')
        } else {
            console.log('se ha creado')
        }
    })

    res.json({addUser})
 
})


*/
