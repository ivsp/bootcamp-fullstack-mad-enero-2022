import "./anime-button.css";

function AnimeButton(prop) {
  return (
    <div className="container_button">
      <button className="button" onClick={prop.handleGiveaStar}>
        Give a Start
      </button>
      ;
    </div>
  );
}

export default AnimeButton;
