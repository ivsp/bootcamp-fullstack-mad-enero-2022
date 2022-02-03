/*
1. Crea una pagina html  con dos input text , escribe 
cualquier dato recupéra los input en js  y mánda un value 
al localstorage y otro al session storage.
*/

const firstInput = document.querySelector('#fisrInput');


const secondInput = document.querySelector('#secondInput');

const submit = document.querySelector('#submit');


//tengo que crear un evento para que se me almacenen los datos

const submitFunction = (a) =>{
    const firstInputValue = firstInput.value;
    const secondInputValue = secondInput.value;

    //los mando al local y al session
    sessionStorage.setItem('parrafo_1',firstInputValue);
    localStorage.setItem('parrafo_2', secondInputValue);

}



submit.addEventListener('click',() => submitFunction())



/*
2. En tu pagina html pinta en un P por pantalla el 
valor que tienes en el session storage.
*/



const paintStorage = ()=>{
    
    const sessStorage = sessionStorage.getItem('parrafo_1');
    const locStorage = localStorage.getItem('parrafo_2');
    const par1 = document.createElement('p');
    par1.textContent = sessStorage;
    document.body.appendChild(par1);
    const par2 = document.createElement('p');
    par2.textContent = locStorage;
    document.body.appendChild(par2);

}
submit.addEventListener('click',() => paintStorage())

/*
3. Obtener coordenadas mediante la api de  geolocalizacion, con 
los datos de la geolocalizacion mostrar en tu html   un enlace a 
googlemap que te lleve directo a tu posición actual.
*/

//me creo la función callback que me devolverá el objeto position

let coords
let link
let latitude
let longitude

function getGoogleMapsLink() {
    link = `https://www.google.com/maps/@${latitude},${longitude},15z`
}

function success(pos) {
    coords = pos.coords
    latitude = coords.latitude
    longitude = coords.longitude

    getGoogleMapsLink()
    const a = document.createElement('a')
    a.textContent = 'My geolocation'
    a.href = link
    document.body.appendChild(a)

    console.log(`Your location is: 
    latitude: ${coords.latitude}
    longitude: ${coords.longitude}`)
}

navigator.geolocation.getCurrentPosition(success)
