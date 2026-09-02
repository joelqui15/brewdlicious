function Menu() {
  return (
    <div className="menu">
      <div className="menu__header">
        <p className="menu__header-eyebrow">Explore Our Menu</p>
        <h2 className="menu__header-title">Something for Everyone</h2>
        <p className="menu__header-description">
          Discover a variety of delicious options to satisfy every craving.
        </p>
      </div>
      <ul className="menu__categories"></ul>
    </div>
  );
}

export default Menu;
