import Hero from "../Main/hero/Hero.jsx";
import Favorites from "../Main/favorites/Favorites.jsx";

function Main({ favoriteMenuItems }) {
  return (
    <main>
      <Hero />
      <Favorites favoriteMenuItems={favoriteMenuItems} />
    </main>
  );
}

export default Main;
