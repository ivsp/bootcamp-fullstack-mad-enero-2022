/**
 *
 * Crea un componente React llamado Country, el cual recibirá  por Props el
 *  siguiente objeto que le enviaremos desde App.js y pintará por pantalla lo siguiente
 *
 *      1- Creo un componente que me dibuja las cards
 */
import "./style.css";

function Cards(prop) {
  console.log(prop.img);
  return (
    <div className="card_container">
      <div
        className="card_image"
        style={{ backgroundImage: `url(${prop.img})` }}
      ></div>
      <div className="card_body">
        <h2 className="card_body-tittle">{prop.name}</h2>
        <div className="card_body-info">
          <p className="code">Code: {prop.code}</p>
          <p className="dial-code">Dial Code: {prop.dial_code}</p>
          <button className="button">Buy Tickets</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
