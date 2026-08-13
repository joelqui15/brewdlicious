import "./FavoritesCard.css";
// import image correctly and use it in the component
//style the cards
function FavoritesCard({ image, description }) {
  return (
    <div className="favorites-card">
      <li className="favorites-card__item">
        <img src={image} alt={description} className="favorites-card__image" />
        <p className="favorites-card__description">{description}</p>
        <button className="favorites-card__button">View Details...</button>
      </li>
    </div>
  );
}

export default FavoritesCard;
w;
