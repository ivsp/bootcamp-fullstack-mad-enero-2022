

/* SINTAXIS DE PROMESAS  */

/*
1. Hello world. Crear una promesa que en su creación se resuelva 
con un string 'hola mundo'. Escuchar la resolución de la promesa 
y pintar el resultado por consola
*/

const helloAceptPromise = new Promise (resolve =>{

    resolve('Hola Mundo')  
    
});

helloAceptPromise.then(
    (str) => {console.log(str)}
);

/*
2. Hello world. Crear una promesa que en su creación se rechace con 
un string 'hola mundo rechazado'. Escuchar la resolución de la promesa 
y pintar el resultado por consola.
*/

const helloRejectPromise = new Promise (reject =>{

    reject('Hola Mundo rechazado')  
    
});

helloRejectPromise.then(
    (str) => {console.log(str)}
);

/*
3. Crear una promesa que se resuelva con un numero aleatorio del 1-10. 
Escuchar el resultado y pintarlo en un p.
*/
const randomNumberPrimise = new Promise ((resolve,rejected)=>{

    resolve(Math.round(Math.random()*10));

});
    


randomNumberPrimise.then(
    (number) => {console.log(number)}
);

/*
4. Crear una promesa que genere un numero aleatorio del 1-10. 
Si ese numero es par se resuelve la promesa con el numero. Si es impar 
se rechaza la promesa.
*/

const resolveIfEven = new Promise ((resolve,rejected)=>{

    const randomNumber = Math.round(Math.random()*10);

    if(randomNumber%2 === 0){
        resolve(Math.round(Math.random()*10));

    }else{
        rejected('Número impar, promesa rechazada');

    }


});
    
resolveIfEven.then(
    (number) => {console.log(number)},
    (str) => {console.log(str)}
);

/*
5. Crear una promesa que se resuelva a los 2 segundos con el 
texto 'Resuelta cuando pasaron 2 segundos'
*/

const resolvePromise2s = new Promise (resolve =>{

    setTimeout(()=>{
        resolve('Han pasado 2 segundos y resuelvo la promesa')}, 2000);
});

resolvePromise2s.then(
    (str)=> {console.log(str)}
);


/* SINTAXIS DE TIMERS */
/*
1. crear una página que pinte un P con el texto 'hello timeout' 
a los 8 segundos.
*/

const parr = document.createElement('p');

const printP8s = new Promise(resolve =>{

    setTimeout(()=>{
        resolve('hello timeout')}, 8000);

});

printP8s.then(
    (str)=>{
        const parr = document.createElement('p');
        parr.textContent = str;
        document.body.appendChild(parr);
    }
); 

/*
2. En la página anterior crear un intervalo que pinte un p 
cada 500 ms con el texto 'conectando...'
*/

const coneccting = new Promise(resolve =>{

    
        resolve('conectando...');
});
/*
coneccting.then(
    (str)=>{
        setInterval(()=>{
            const parr = document.createElement('p');
            parr.textContent = str;
            document.body.appendChild(parr);}, 500);
        
    }
); */

/*
3. Colocar un botón en el navegador que al pulsarlo nos dibuje 
los números del 0 al 10. Entre elemento y elemento debe transcurrir 
0.5 segundos.
*/


function drawPnumbers (){
        let counter = 0;
       const interval = setInterval( createP,500);

        function createP(){
            const p = document.createElement('p');
            p.textContent = `${counter}`;
            document.body.appendChild(p);
            console.log(counter);
            counter++;

            if(counter === 11){
                clearInterval(interval);
            }
        }
           
       
        
}

const drawNumbers = new Promise (resolve =>{

    resolve (
        document.body.querySelector('.button').addEventListener('click',()=> drawPnumbers() ));

    
})

/*
4. Crear una función que se ejecute cada 1 segundo y pinte en Html un reloj con el formato hh:mm:ss
*/

function drawWatch (){
    const watch = document.createElement('p');
    let hour = '00';
    let min = '00';
    let seg = '00';
    watch.textContent = `${hour}:${min}:${seg}`
    console.log(watch.textContent)
    document.body.appendChild(watch);
    setInterval(
        ()=>{
            if(seg<10){
                seg ++;
                if(seg>60){
                    seg = 1;
                    min ++;
                }
                if(min>60){
                    seg = 1;
                    min = 0;
                    hour ++;
                }
                watch.textContent = `${hour}:${min}:0${seg}`
            }
            if(seg>=10){
                seg ++;
                if(seg>60){
                    seg = 0;
                    min ++;
                }
                if(min>60){
                    seg = 0;
                    min = 0;
                    hour ++;
                }
                watch.textContent = `${hour}:${min}:${seg}`
            }
            if(min<10){
                seg ++;
                if(seg>60){
                    seg = 0;
                    min ++;
                }
                if(min>60){
                    seg = 0;
                    min = 0;
                    hour ++;
                }
                watch.textContent = `${hour}:0${min}:${seg}`

            }
           

        },1000)
}

drawWatch();