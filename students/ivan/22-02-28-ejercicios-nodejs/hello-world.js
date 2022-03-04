import { pid, ppid } from "process";
import os from "os";
import dns from "dns";
import { argv } from "process";
import { promises, reverse } from "dns";

/**
 * EJERCICIO 1
 */

// console.log("Hola mundo");
// console.log(`This process pid is ${pid}`);
// console.log(`This process ppid is ${ppid}`);

/**
 * EJERCICIO 2
 */

// console.log(os.version());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(Object.keys(os.networkInterfaces()));

Object.keys(os.networkInterfaces()).map((p, i) => {
  console.log(p, os.networkInterfaces()[p]);
  // return console.log({
  //   name: p,
  //   ipV4dir: os.networkInterfaces(p).address,
  //   ipv6dir: os.networkInterfaces(p).address,
  //   macdir: os.networkInterfaces(p).mac,
  // });
});

/**
 * EJERCICIO 3
 */
const option = {
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

// console.log(
//   dns.lookup("google.com", option, (err, address, family) =>
//     console.log("address: %j family: IPv%s", address, family)
//   )
// );

/**
 * EJERCICIO 4
 */
// argv.forEach((val, index) => {
//   if (index === 2) console.log(`${index}: ${val}`);
// });

/**
 * EJERCICIO 5
 */

const options1 = {
  family: 0,
  all: true,
  // hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

const options2 = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

const options = [options1, options2];

const data = argv[2];

promises.lookup(data, options1).then((ip) => console.log(ip)); // CON PROMESAS

//CON EL CALLBACK
/*
options.forEach((o) => {
  console.log(
    dns.lookup(argv[2], o, (err, address, family) =>
      console.log("address: %j family: IPv%s", address, family)
    )
  );
});
*/

/**
 * EJERCICIO 6
 */

//  data = argv[2];
/*
if (data.startsWith("www")) {
  options.forEach((o) => {
    console.log(
      dns.lookup(argv[2], o, (err, address, family) =>
        console.log("address: %j family: IPv%s", address, family)
      )
    );
  });
} else {
  console.log("hla");
  dns.reverse(`${data}`, (err, hostname) => console.log(hostname));
}
*/
