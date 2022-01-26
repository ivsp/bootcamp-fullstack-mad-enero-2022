/*
1. Crea un array de números por prompt e imprimelo por pantalla.(easy).
*/

/*
let n1 = parseFloat(prompt('ingrese otro numero'));

let n2 = parseFloat(prompt('ingrese otro numero'));
let arr = [n1,n2];

document.write(arr);

document.write('<br>');

*/


let arr = [];
let number;
for(let i=0; i<3; i++){
    number = parseFloat(prompt('ingrese otro numero'));
    arr[i] = number;
}

document.write(arr);

document.write('<br>');

/*
2. Crear una función que reciba por parámetros 2 array.
 Esta función devolverá los 2 arrays concatenados y los 
 mostrará en el navegador.(easy)
*/

function concatenarArray (n,p){

    return `${n} ${p}`;

};

let arr1 = ['Hola','Iván'];
let arr2 = [2,50,48,89,45];

document.write(concatenarArray(arr1,arr2));
document.write('<br>');

/*
3. Crea un array  de música rock que contenga subgeneros
 [punk, metal, hardcore], luego un array de los géneros
  musicales [rock, pop, country] en el array de los
   géneros musicales 'rock' será el array de subgéneros
    de música rock, luego crea un array de banda que contenga
     un string "metallica" y el array de géneros y con ese 
     array de banda muestra por pantalla el nombre de la 
     banda "metallica" y el subgénero "metal".(easy)
*/

let musicRock = ['punk','metal','hardcore'];
let generos = [musicRock, 'pop','country'];
let banda = ['metalica',generos[0][1]];

document.write(banda);
document.write('<br>');

/*
4.Crear una función que reciba un parámetro 
de entrada y que imprima por pantalla true si 
el parámetro es un array y false si es otro tipo de dato.(easy)

*/
let parametro = 2;

document.write(typeof parametro);
document.write('<br>');


function isArray(par){

    if(typeof par === 'object'){
        return 'true';
    }else{
        return 'false';
    }
}

document.write(isArray(parametro));
document.write('<br>');


/*
5. Crear una función que reciba un array
 de 10 números e imprima por pantalla
  true si todos son mayor de 10 o false en caso contrario.(easy)
*/


arr = [11,20,30,40,50,80,60,70,90,50];

function valueArray(par){
    for(let i=0; i<par.lenght;i++){
        if(par[i]<10){
            return 'false';
        }
    }
    return 'true';

}
document.write(valueArray(arr));
document.write('<br>');


/*
6. Crea una función que reciba un array
 y una palabra y devuelva true o false si
  palabra existe o no dentro del array.(easy)
*/

function doesWordExist(par1,par2){
    for(let i=0;i<par1.length;i++){
        if(par1[i]===par2){
            return 'true'
        }
    }
    return 'false'
}

arr = ['hola','adios','nombre'];
let word = 'adios';

document.write(doesWordExist(arr,word));
document.write('<br>');


/*
7. Crear una función que reciba un array de
 números y devuelva un array con los que son
  mayores que 10.(easy)
*/

function numberArray10(par){
    let contador = 0;
    let arr = [];
    for(let i=0;i<par.length;i++){
        if(par[i]>10){
            arr[contador] = par[i];
            contador++;
        }

    }
    return arr;

}

arr = [10,5,80,60,70,4,51];

document.write(numberArray10(arr));
document.write('<br>');

/*
8. Crear una función que reciba un array de strings e imprime
 por pantalla el array con los strings capitalized, 
 ejmp: let =[jose,maca,jorge], output: [Jose,Maca,Jorge].(medium)
*/

arr = ['jose', 'maca','jorge'];

function capitalizeArray(par){
    for(let i=0;i<par.length;i++){
        par[i]=par[i].charAt(0).toUpperCase() + par[i].substring(1, par[i].length);
    }
    return par;

}

document.write(capitalizeArray(arr));
document.write('<br>');

/*
9. Crear una función que dado un número y un array de 
números, te devuelva  por pantalla la posición donde 
se encuentra el número o  -1 si no lo encuentra.(medium)
*/
function findPosition(num, arr){
        for(let i=0;i<arr.length;i++){
            if(arr[i]===num){
                return `El numero se encuentra en la posición ${i} del array`
            }
            
        }
        return -1;


}

arr = [1,5,7];
n = 10;

document.write(findPosition(n,arr));
document.write('<br>');

/*
10. Crea una función que al pasarle por parametro un array 
y un número, esta devuelva el array dividido en tantos 
sub-arrays como sea necesario, basándonos en el número 
dado por parámetro que indique su tamaño: ([1,2,3,4],2), 
output: [[1,2],[3,4].(hard)
*/

function divideArray(arr,n){
     let long = arr.length;
     let arr2=[];
/* Creo mi array de arrays con 2 bucles anidados. En el primer bucle
    recorro las posiciones del primer array. En el segundo lleno las posiciones
    del segundo array.

*/
/*/Este primer bucle va desde 0 hasta el número entero que resulta de dividir la 
  longitud del array de entrada entre el número de arrays que queremos. Este
    bucle se ejecuta tantas veces como posiciones tiene mi primer array. Si tengo
    un array de entrada de 9 posiciones y quiero agrupar en subarrays de 5 posiciones, 
    este bucle se ejecuta 9/5= 1.8, que redondeando al superior, serían 2 veces.
    Dentro de este bucle tengo 2 condiciones. 
    LA primera se ejecuta cuando un parámetro longitud sea inferior al número de entrada n.
    Esta variable se actualiza cada vez que entra en el if. Esto es, tantas veces como numeros 
    enteros haya de la división de la longitud entre el parámetro n. Para el ejemplo anterior
    9/5= 1.8 se ejecutaría una sola vez. Ya que al principio long=9 pero despues de actualizarse
    long=9-5=4 y ya no entraría en el if.
    Es decir, ahora tengo que crear un array con tantas posiciones como resto tenga la división de
    9/5=4.
    Resumiendo, el primer subarray tendra n posiciones, las indicadas con el parámetro de entrada (5)
     y el segundo, para este caso concreto, las sobrantes, 4
*/
     for(let i=0;i<Math.ceil(arr.length/n);i++){
        if(long>=n){
            for(let j=0;j<n;j++){
                arr2[i]= Array(n);    
            }
            long = long - n;
        }else if(long>0){
            for(let k=arr.length%n; k>=arr.length%n;k--){
                arr2[i]=Array(arr.length%n)
            }
        }
     }

//El siguiente paso es recorrer ese array que acabo de crear asignandole los valores correspondientes.
//los bucles van a ser iguales, pero ahora modificaré los valores de las posiciones de mi nuevo array.
        
    long = arr.length; //inicializo el valor de la longitud de nuevo a la longitud de mi array de entrada
let counter = 0; //introduzco una variable counter que va a leer la posición de mi array de llamada a la función
     for(let h=0;h<Math.ceil(arr.length/n);h++){
        if(long>=n){
            for(let p=0;p<n;p++){
                arr2[h][p]= arr[counter]; 
                counter++

            }            
         }else if(long>0){
            for(let q=0; q<arr.length%n;q++){
                arr2[h][q]=arr[counter]
                counter++
            }
                     }
         long = long - n;
     }
        return arr2
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8]
document.write(divideArray(nums,3));
document.write('<br>');

let result = divideArray(nums,3)

document.write(result[0]);
document.write('<br>');

document.write(result[1]);
document.write('<br>');

document.write(result[2]);





document.write('<br>');
// const subarrays = (array, number) => {
//     const newArray = []
//     const parts = array.length / number
//     for (let i = 0; i < parts; i++) {
//        for (let j = 0; j < i; j++) {
//            newArray[]
//        }
//     }
//     return newArray
// }
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// const subarrays = (arr, number) => {
//     const parts = Math.floor(arr.length / number)
//     let newArray = Array(Math.floor(arr.length / number))

//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < newArray.length; j++) {
//             for (let k = 0; k < number; k++) {
//                 newArray[j]=arr[k]
//             }
//         }
//     }
//     console.log(newArray);
// }
// subarrays(nums, 2)