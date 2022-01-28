/*
1. Crear una función que reciba por parámetros 
2 array. Esta función devolverá los 2 arrays 
concatenados y los mostrará en el navegador.(easy)
*/

let arr1 = [0,1,2,3];
let arr2 = [4,5,6,7,8];

document.write(arr1.concat(arr2));
document.write('<br>');

/*
2. Crear una función que reciba un parámetro
 de entrada y que imprima por pantalla true si
  el parámetro es un array y false si es otro 
  tipo de dato, ver metodos de array!.(easy)
*/
arr1 = [[0,1],[1],[2,3]];
//Si arr1 no fuese un array de arrays devuelve false, porque el método find y some
//recorren el array de entrada analizando cada parámetro.

document.write(arr1.some(arr1 => typeof arr1 === 'object'));
document.write('<br>');

document.write(Array.isArray(arr1));

//si usasemos el método find lo que recibiriamos es el valor del 
//primer elemento que cumple la condición.

/*
3. Crear una función que reciba un array de 10 números
 e imprima por pantalla true si todos son mayor de 10 
 o false en caso contrario (hay un metodo 
    de array para esto empieza por E...).(easy)
*/

arr1 = [110,11,142,13,154,15,16,17,18,190];
arr2 = [0,11,2,3,4,15,6,7,18,19];

document.write('<br>');



document.write(arr1.every(value => value>10));
document.write('<br>');
document.write(arr2.every(value => value>10));
document.write('<br>');

/*
4. Crea una función que reciba un array y una palabra 
e imprima true o false si palabra existe o no dentro 
del array (ver metodo empieza por i).(easy)
*/
arr1 = ['hola','mundo','que','tal'];

document.write(arr1.includes('hola'));
document.write('<br>');


/*
5. Crear una función para ordenar un array de 
números desordenados de mayor a menor.(easy)
*/

arr1 = [110,11,142,13,154,15,16,17,18,190];
arr2 = arr1.sort((a, b) => a - b);

document.write(arr2);
document.write('<br>');
document.write(arr2.reverse(arr2));
document.write('<br>');

/*
6. Crear una función que reciba un array de números 
y devuelva un array con los que son mayores que 10.(easy)
*/
arr1 = [0,1,142,13,5,1,16,17,18,10];

document.write(arr1.filter(value => value>10));
document.write('<br>');

/*
7. Crear una función que reciba un array de strings
 e imprime por pantalla el array con los strings 
 capitalized, ejmp: let =[jose,maca,jorge], 
 output: [Jose,Maca,Jorge].(medium)
*/
arr1 = ['jose','maca','jorge'];

document.write(arr1.map(v => v.charAt(0).toUpperCase() + v.substring(1, v.length)));
document.write('<br>');


const uuu = arr1.map(v => v.charAt(0).toUpperCase() + v.substring(1, v.length));
document.write(uuu);
document.write('<br>');


function capitalized(arr){
    arr.forEach((v,i,arr) => {

        arr[i]= v.charAt(0).toUpperCase() + v.substring(1, v.length);
        //v = v.charAt(0).toUpperCase() + v.substring(1, v.length);
    })   
    return arr;
};


document.write(capitalized(arr1));
document.write('<br>');

/*7
8. Crear una función que dado un número y un array de números, 
te devuelva  por pantalla la posición donde se encuentra el número 
o  -1 si no lo encuentra.(medium)
*/

arr1 = [0,1,142,13,5,1,16,17,18,10];


function positionNumber(n,arr){

   return  arr.findIndex(v => v === n)
};

const positionNumberArrow = (n,arr) => arr.findIndex(v => v === n);
 
document.write(positionNumber(13,arr1));    
document.write('<br>');

document.write(positionNumberArrow(142,arr1));    
document.write('<br>');

/*
9. Crear una función que reciba un array,  deberá mostrar en el navegador 
el array tantas veces como elementos contiene  y en cada una de ellas eliminará 
el último elemento: El output visualizado debe ser el siguiente:   
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go', 'pascal'   
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java', 'go'                                                                                                                                                                          
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript', 'java'                                                                                                                                                                              
// 'c', 'c++', 'python', 'golang', 'solidity', typescript', 'javascript',    etc..(medium)
*/

let variable = ['c', 'c++', 'python', 'golang', 'solidity', 'typescript', 'javascript', 'java', 'go', 'pascal'];

function deletedContent (arr){
  for(let i=arr.length; i>0;i--){
    document.write(arr);
    document.write('<br>');
    arr.pop()

  }
};

deletedContent(variable);
document.write('<br>');


/*
10. Crea una función que dado un número te imprima por pantalla la 
cantidad de bucles que tiene, un número tiene un bucle cuando tiene 
un circulo cerrado cuando lo dibujas, ejemp el 6 tiene 1 bucle y el 8 
tiene dos bucles, si pasamos a la función el número (897) esta debe arrojar "3 bucles".
*/

number1 = 8846;


function bucles (number1){
    newArray = number1.toString().split('');
    console.log(newArray)
    let bucle = 0;
    newArray.forEach(v => {
        v = parseInt(v)
         if(v===0 || v===6 || v===9){
             bucle = bucle + 1;
         }else if(v===8){
            bucle = bucle + 2;
         }
     })
    return `${bucle} bucles`;

}

document.write(bucles(number1))
document.write('<br>');


/*
11.Crea una función que dada una palabra y una oración 
por prompt, la busque en la oración  e imprima por pantalla
 cuantas veces aparece esa palabra en la oración, la palabra
  y la oración deben ser parámetros de una función, 
  ejemplo: oración: "Hola, como estas? ", 
  palabra: hola, output: "la palabra hola aparece 1 
  vez en la oración".(hard)
*/



/*
12. Crea una función que al pasarle por parámetro un array y un número, 
esta devuelva el array dividido en tantos sub-arrays como sea necesario, 
basándonos en el número dado por parámetro que indique su tamaño: 
([1,2,3,4],2), output: [[1,2],[3,4].(hard)
*/

/*13. Solicitar al usuario un número. A continuación solicitar al usuario 
tantas palabras como haya indicado en el primer número y guardarlas en un 
array de palabras. Con ese array tenemos que:
Ordenar las palabras de menor a mayor longitud.
-Imprimir con un P si hay alguna palabra con más de una letra 't'
-Imprimir con un p si todas las palabras contienen al menos una 'a'
-Imprimir con un p la primera palabra que empiece por 'h' o el mensaje 
"no hay palabras que empiecen por h"
-Generar un nuevo array con las palabras dadas la vuelta
-Imprimir con una p cuántas palabras son infinitivos (terminan en ar er o ir).

*/

document.write('<br>');

//Imprimir con un P si hay alguna palabra con más de una letra 't'
function trabajoConPalabras (numberwords){
  
  let array = Array(numberwords);
  for(let i=0;i<numberwords;i++){
    array.push(prompt('Ingrese una palabra'));
  }  
  //ordenar el array de menor a mayor
  array.sort((a, b) => a.length - b.length); //a.length = 4 y que b.kength = 7. Devuelve -3 el programa indica que a<b
//Uso some para saber cuantas palabras hay en cada posicion del array con al menos 2 't'
//paso el array a minusculas y separo cada palabra del string por los carateres 't'.
//si el string resultante tiene una longitud mayor a 3 quiere decir que lo ha partido al menos
//2 veces.

//-Imprimir con un P si hay alguna palabra con más de una letra 't'

  array.some(v => v.toLowerCase().split('t').length>=3) 
  // Insertar un document.write
  document.write(`<p>Hay alguna palabra con mñas de una letra 't':</p>${array.some(v => v.toLowerCase().split('t').length>=3)}`)


 // -Imprimir con un p si todas las palabras contienen al menos una 'a'

  array.every(v => v.toLowerCase().includes('a'));
  // Insertar un document.write
  document.write(`<p>Contienen todas las palabras, al menos de una letra 'a':</p>${ array.every(v => v.toLowerCase().includes('a'))}`)

   
// -Imprimir con un p la primera palabra que empiece por 'h' o el mensaje 
//"no hay palabras que empiecen por h"
array.find(v => v,toLowerCase().startsWith('h'))
//Imprimir un document.write


//-Generar un nuevo array con las palabras dadas la vuelta


}

let numberwords = parseInt(prompt('indique un numero'))
document.write(trabajoConPalabras(numberwords))


/*
RESOLUCIÓN DE ALEX EN CLASE
*/

const n = parseInt(prompt('Introduzca un número'));

const words = [];
for (let i = 0; i < n; i++) {
    const word = prompt('Introduzca una palabra');
    words.push(word);
}

// a partir de aqui ya tenemos un array de palabras de longitud n

/*
1. Ordenar el array de menor a mayor
(a,b) => {
    if(a.length < b.length) return -1;
    if(a.length > b.length) return 1;
    return 0;
}
*/
words.sort((a, b) => a.length - b.length); // a.length =4 y b.length = 4 ==> 0


// Imprimir con un P si hay alguna palabra con más de una letra 't' --> some
function hasMoreThanOneT(str) {
    let count = 0, i = 0, lStr = str.toLowerCase();
    while (!count < 2 && i < lStr.length) {
        count += lStr[i] === 't' ? 1 : 0;
        i++;
    }

    return count >= 2;
}
// version fuerza bruta
document.write(`<p>Hay alguna palabra con más de una t: ${words.some(w => hasMoreThanOneT(w))}`);
// version split
document.write(`<p>Hay alguna palabra con más de una t: ${words.some(w => w.toLowerCase().split('t').length >= 3)}`);
// version REGEX
document.write(`<p>Hay alguna palabra con más de una t: ${words.some(w => /.*t.*t/i.test(w))}`);

/*
Imprimir con un p si todas las palabras contienen al menos una 'a' --> every
*/
// version includes
words.every(w => w.toLowerCase().includes('a'));
// version REGEX
words.every(w => /.*a/i.test(w));

/*
Imprimir con un p la primera palabra que empiece por 'h' --> find 
o el mensaje "no hay palabras que empiecen por h"
*/
// version starts with
words.find(w => w.toLowerCase().startsWith('h'));
// versino REGEX
words.find(w => /^h/i.test(w));

/*
Generar un nuevo array con las palabras dadas la vuelta --> map
*/
function reverseStr(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}


words.map(w => reverseStr(w));

/*
Imprimir con una p 
   cuántas palabras son infinitivos (terminan en ar er o ir) --> reduce
*/
// version ENDS with
const isInfinitive = w => w.endsWith('er') || w.endsWith('ar') || w.endsWith('ir');
words.reduce((acc, w) => acc + (isInfinitive(w.toLowerCase()) ? 1 : 0), 0);
// version REGEX
words.reduce((acc, w) => acc + (/(er|ir|ar)$/i.test(w) ? 1 : 0), 0);