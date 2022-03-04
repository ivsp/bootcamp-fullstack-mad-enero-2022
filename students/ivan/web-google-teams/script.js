/**
 * Mini version de Google Meet. Google meet es una aplicación para la realizacion 
 * de videollamadas.. Vamos a crear una versión local de la misma. En la imagen se
 *  encuentra un ejemplo de objetivo final. Los pasos para serán los siguientes:
 * 
 * 1 - Debemos generar la siguiente estructura en nuestro documento HTML
 * 
 * 2- La primera parte será poder visualizar la cámara de nuestra cam. 
 * Para ello debemos investigar sobre el uso de la siguiente función del api 
 * de Media Devices
 * 
 * 3 - Los botones que vemos en el video debemos pintarlos en HTML, aunque no serán funcionales.
 * 
 * 4 - A continuación vamos a ver que podemos hacer con el botón Join Video. En 
 * este caso vamos a aprender posicionar por encima de cualquier aplicación un video
 *  y poder irnos a otras aplicaciones mientras ese video se mantiene flotante. A esto
 *  se le conoce como "Picture in Picture". JavaScript tiene un API para poder hacerlo 
 * y sería la siguiente
 * 
 * Cuando pulsemos ese botón verde, deberá llevar el video del HTML flotante por 
 * el ordenador. (hay una imagen de ejemplo)
 * https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API
 * 
 * 
 *  */


/** PUNTO 2**
 * 
 *Para usar la camara tengo que llamar a la propiedad mediaDevices del navigator y usar el método getUserMedia
 *Este método necesita una variable de entrada. Esta variable es un objeto con dos propiedades:
 *      - Audio --> variable de tipo boolean que indica true si queremos acceder al audio
 *      - Video --> variable de tipo boolean que indica si queremos acceder al video
 *  Ambas propiedades deben ser especificadas. Si el navegador no encuentra medios para 
 * mostrarlas devolverá la promesa rechazada (rejected) 
 * 
 * NOTA: La variable video tambien acepta un objeto con las propiedades width y height.
 * {audio: true,  video: { width: 1280, height: 720 }}
 * 
 * No todas las variables son numeros, la propiedad video tambien acepta un objeto con
 * propiedad facingMode, que se suele utilizar en dispositivos móviles.
 * { audio: true, video: { facingMode: "user" } }
 * 
 * Para usar la ámara trasera del dispositivo movil: { audio: true, video: { facingMode: { exact: "environment" } } }
 * 
 * var constrains = {audio: true, video:true}
 * 
 * 
 * navigator.mediaDevices.getUserMedia(constraints); --> 
 * 
 * Si la promesa pasa a estado fullfill esto devuelve un objeto MediaStream
 */


const constraints = { audio: true, video: { width: 1280, height: 720 } };
//escucho la promesa
navigator.mediaDevices.getUserMedia(constraints).then(
//la promesa me devuelve el objeto mediaStream. Este objeto se lo voy a pasar como src a mi
//elemento video del DOM. Esto lo hago mediante la API HTMLMediaElement, que que permiten 
//controlar los reproductores de vídeo y audio mediante programación, por ejemplo,
 //HTMLMediaElement.play(), HTMLMediaElement.pause(),

 // info de los APIS de audio y video (HTMLMediaElement) HTMLmedia https://www.w3schools.com/tags/ref_av_dom.asp
 //info del evento onloadedmetadata https://www.w3schools.com/tags/av_event_loadedmetadata.asp

    (mediaStream) => {
        var videoDOM = document.querySelector('video'); //selecciono el video del DOM
        videoDOM.srcObject = mediaStream; //srcObject recibe un mediaStream que representa el contenido para reproducir en la actual etiqueta media (video en este caso)
        //videoDOM.defaultMuted = true; //lo inicializo muteado
        videoDOM.volume = 0.0; //inicio el volumen a 0 (silenciado) el máximo es 1.0
        videoDOM.onloadedmetadata = (e) => { //onloadedmetadata es un evento que ocurre cuando se han cargado los metadatos del audio/video especificado
            videoDOM.play(); //reproduzco el video
        };        
    }
);