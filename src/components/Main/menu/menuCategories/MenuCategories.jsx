import "./MenuCategories.css";

function MenuCategories({ title, description, imageUrl }) {
  return (
    <li className="menu__category-card">
      <div className="menu__category-card-info">
        <h3 className="menu__category-card-title">{title}</h3>
        <p className="menu__category-card-description">{description}</p>
      </div>
      <img className="menu__category-card-image" src={imageUrl} alt={title} />
    </li>
  );
}

export default MenuCategories;
