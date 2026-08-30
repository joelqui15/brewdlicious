import "./FavoritesCard.css";
// import image correctly and use it in the component
//style the cards
function FavoritesCard({ image, description, price }) {
  return (
    <li className="favorites-card">
      <img src={image} alt={description} className="favorites-card__image" />
      <p className="favorites-card__price">{price}</p>
      <p className="favorites-card__description">{description}</p>
      <button className="favorites-card__button">VIEW MENU... ➔</button>
    </li>
  );
}

export default FavoritesCard;
