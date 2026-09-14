import Hero from "../Main/hero/Hero.jsx";
import Favorites from "../Main/favorites/Favorites.jsx";
import Menu from "../Main/menu/Menu.jsx";

function Main({ favoriteMenuItems, menuCategories }) {
  return (
    <main>
      <Hero />
      <Favorites favoriteMenuItems={favoriteMenuItems} />
      <Menu menuCategories={menuCategories} />
    </main>
  );
}

export default Main;
