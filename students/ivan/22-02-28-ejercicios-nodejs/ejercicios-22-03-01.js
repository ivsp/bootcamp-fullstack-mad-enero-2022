import { readFile, writeFile, rm, mkdir, appendFile } from "fs/promises";
import { readFileSync, readdir, stat } from "fs";
import fetch from "node-fetch";
import { argv } from "process";
import { homedir, tmpdir } from "os";
import { isFile } from "fs/dir";
/**
 * EJERCICIO 1
 * Describe los siguientes permisos:
101 111 110 --> Owner (lectura, ejecucion), GOwner(lectura, escritura, ejecución), Resto(lectura, escritura)
001 010 110 --> Owner (ejecucion), GOwner(escritura), Resto(lectura, escritura)
100 101 011 --> Owner (lectura), GOwner(lectura, ejecución), Resto( escritura, ejecución)
101 112 001 --> Owner (lectura, ejecucion), GOwner(indefinido), Resto(ejecución)

Representación Octal
465 --> Owner (lectura) GOwner(lectura, escritura) Resto (lectura, ejecucion)
666 --> Owner(lectura, escritura) GOwner(lectura, escritura)  Resto(lectura, escritura)
755 --> Owner(lectura, escritura, ejecución)  GOwner(lectura, ejecucion)  Resto(lectura, ejecucion)
500 --> Owner(lectura, ejecucion)  GOwner(ninguno)  Resto(ninguno)

 */

/**
 * EJERCICIO 2
 * Crear un app en nodejs que realice las siguientes operaciones:
1. Crear un archivo vacío con el nombre hello.json
2. Leer el archivo package.json y pintar por consola el name
3. Escribir en el archivo hello.json el siguiente objeto 
({"name":"hello-world-nodejs","version":"1.0.0"} )
Crear una carpeta con el nombre mi-primera-carpeta
Añadir al archivo hello.json el texto texto añadido a un JSON
Borrar el archivo hello.json
 */
//1
await writeFile("./hello.json", "");
//2
const dataSync = readFileSync("./package.json", { encoding: "utf8" });
const objDataSync = JSON.parse(dataSync);
console.log(objDataSync.name);
//3
const obj = { name: "hello-world-nodejs", version: "1.0.0" };
const JSONobj = JSON.stringify(obj);
await writeFile("./hello.json", JSONobj);
//4
// await mkdir("mi-primera-carpeta");
//5
await appendFile("./hello.json", "'texto añadido a un JSON'");
//6
// await rm("./hello.json");

/**
 * EJERCICIO 3
 * Crear una app en NodeJS que lea el JSON y pinte por consola lo siguiente:
1. Numero de entidades españolas en SWIFT.
2. Nombre + codigo swift de las entidades malagueñas.
3. Nombre + codigo swift de las entidades cuyo código swift sea superior a 8 caracteres.
Si hay alguna entidad onubense o no
 */
//1
// const dataSwift = readFileSync("./swiftcodes.json", { encoding: "utf8" });
// const objDataSwift = JSON.parse(dataSwift);
// console.log(objDataSwift.list.length);

//2
// const malagaSwift = [];
// objDataSwift.list.forEach((bank) => {
//   if (bank.city === "MALAGA") {
//     const objMalagaSwift = {
//       name: bank.bank,
//       swift: bank.swift_code,
//     };
//     malagaSwift.push(objMalagaSwift);
//   }
// });
// console.log(malagaSwift);
//con un filter es mucho mas sencillo
// const malagaCity = objDataSwift.list.filter((bank) => bank.city === "MALAGA");
// console.log(malagaCity);

//3
// const banksSwiftOver8digits = objDataSwift.list.filter(
//   (bank) => bank.swift_code.length > 8
// );
// console.log(banksSwiftOver8digits);

//4
// const huelvaSwitch = objDataSwift.list.filter((bank) => bank.city === "HUELVA");
// console.log(huelvaSwitch);

/**
 * EJERCICIO 4
 *
 */
const response = await fetch("http:ip-api.com/json/");
const data = await response.json();
//console.log(data);

/*
fetch("http://ip-api.com/json/").then((r) =>
  r.json().then((d) => console.log(d))
);
*/
//escribo la info en el conection.json
await writeFile("./conection.json", JSON.stringify(data, null, 2));
//¿Cuál es nuestra IP de conexión en Internet?
console.log(`La IP de conexión a internet es: ${data.query}`);
//¿Qué es el ISP? ¿Cuál es nuestro ISP?
//Es el proveedor de servicios de internet
console.log(`La ISP de conexión a internet es: ${data.isp}`);
//Modificar el programa para que se le pueda pasar por argumento una lista
//de IP's separadas por espacio y se guarde en el archivo un array con la info
//de nuestra conexión mas la info de la lista de IP's. Para obtener la info de una
// IP debemos llamar al API con la IP en la URL.
const IPs = argv.slice(2);
console.log(IPs);
IPs.map(async (ip) => {
  const r = await fetch(`http://ip-api.com/json/${ip}`);
  const d = await r.json();
  console.log(d);
  await appendFile("./conection.json", `,${JSON.stringify(d, null, 2)}`);
});

/**
 * EJERCICIO 5  NO SOY CAPAZ
 * Crear un programa que liste todos los archivos y directorios de la carpeta Home
 *  del usuario que ejecuta el programa, indicando si es archivo o directorio.
 */
/* 
console.log(homedir());
const homeDir = homedir();
console.log(isFile(statSync(homeDir.mode)));

stat(homeDir, (err, stats) => {
  if (err) {
    console.log(error);
  } else {
    readdir(homeDir).then((files) => {
      files.forEach((f) => {
        console.log(`${f} ${stats.isFile()}`);
        console.log(`${f} ${stats.isDirectory()}`);
      });
    });
  }
});
*/
/**
 * EJERCICIO 6
 */

