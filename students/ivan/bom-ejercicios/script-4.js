/*
4. Haremos una pagina web con una pagina home, la cual 
tendrá un form de login que tendrá tres  input uno de nombre, 
uno de password y un input submit, cuando el usuario inicie 
sesión deberá mandarnos a otra pagina html de tipo usuario 
(para esto usaremos la api Location) donde nos aparecerá 
nuestro nombre y un boton de cerrar sesion, cuando le demos
 al boton de cerrar sesion, esta nos debe vaciar nuestro 
 localstorage y mandarnos de regreso al la pagina home
 ( para esto usaremos la api History)
*/

const username = document.querySelector('#username');


const password = document.querySelector('#password');

const login = document.querySelector('#log_in');


//tengo que crear un evento para que se me almacenen los datos

const logInFunction = (a) =>{
    
    //los mando al local y al session
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);

}

login.addEventListener('click',() => logInFunction());


const out = document.querySelector('#log_out');

//ahora tengo que crear un evento que vacie el local store

function deleteStorage (){

    localStorage.removeItem('username');
    localStorage.removeItem('password');

}

out.addEventListener('click', () => deleteStorage());