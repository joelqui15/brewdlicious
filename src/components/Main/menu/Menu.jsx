import "./Menu.css";
import MenuCategories from "./menuCategories/MenuCategories.jsx";

function Menu({ menuCategories }) {
  return (
    <div className="menu">
      <div className="menu__header">
        <p className="menu__header-eyebrow">Explore Our Menu</p>
        <h2 className="menu__header-title">Something for Everyone</h2>
        <p className="menu__header-description">
          Discover a variety of delicious options to satisfy every craving.
        </p>
      </div>
      <ul className="menu__categories">
        {menuCategories.map((category) => (
          <MenuCategories
            key={category.id}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
