/**
 * 
 * 2- Crear un componente llamado greeting que pinte un h1 con el texto hola
 * 
 * Vamos a conseguir que el saludo del componente greeting sea variable.
 *  Para ello debemos permitir que el componente reciba una prop llamada name con 
 * el nombre a saludar. Añadir en el H1 el nombre para que el componente diga Hola Alex 
 * si la prop tiene el valor Alex. Crear en el App.js varios componentes Greeting con 
 * diferentes nombres a saludar.

 */

function PrintH1(prop) {
  return (
    <h1>
      {prop.extend
        ? `Hola ${prop.name}, bienvenido a estas clases de react alucinantes`
        : `Hola ${prop.name}`}
    </h1>
  );
}

export default PrintH1;
