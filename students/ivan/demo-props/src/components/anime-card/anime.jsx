/**
 *
 * Crea un componente React llamado Country, el cual recibirá  por Props el
 *  siguiente objeto que le enviaremos desde App.js y pintará por pantalla lo siguiente
 *
 *      1- Creo un componente que me dibuja las cards
 */
import "./anime.css";
import Rank from "../anime-rank/rank";
import AnimeButton from "../anime-button/anime-buton";

//creo una la función que se realizará cuando se realice el evento

function Anime(prop) {
  const handleGiveaStar = () => {
    console.log(prop.title);
  };

  return (
    <div className="card_container">
      <div
        className="card_image"
        style={{ backgroundImage: `url(${prop.img})` }}
      ></div>
      <div className="card_body">
        <h2 className="card_body-tittle">{prop.title}</h2>
        <Rank rank_number={`#${prop.rank}`}></Rank>
        <AnimeButton handleGiveaStar={handleGiveaStar}></AnimeButton>
      </div>
    </div>
  );
}

export default Anime;
