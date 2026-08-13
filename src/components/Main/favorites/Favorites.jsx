import "./Favorites.css";
import FavoritesCard from "../favorites/favoritesCard/FavoritesCard.jsx";

function Favorites({ favoriteMenuItems }) {
  return (
    <section className="favorites">
      <div className="favorites__header">
        <p className="favorites__header-eyebrow">CRAFTED WITH LOVE</p>
        <h2 className="favorites__header-title">Our Featured Favorites</h2>
        <p className="favorites__header-description">
          Customer favorites pulled and prepared fresh daily at our drive-up
          stand. Try them
          <br /> hot, iced, or blended.
        </p>
      </div>

      <ul className="favorites__content">
        {favoriteMenuItems.map((item) => (
          <FavoritesCard
            key={item.id}
            description={item.description}
            image={item.imageUrl}
          />
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
