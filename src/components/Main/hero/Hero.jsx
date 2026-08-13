import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__clear-text">• LOCALLY OWNED DRIVE-UP HUT</p>
          <h1 className="hero__slogan">
            Coffee Worth Pulling Over
            <br /> For
          </h1>
          <p className="hero__text">
            Freshly handcrafted coffee, energy drinks, smoothies, and breakfast
            favorites—all served fast
            <br /> through our convenient drive-up coffee hut.
          </p>
          <div className="hero__buttons-container">
            <button className="hero__menu-button hero__buttons">
              View Menu
            </button>
            <button className="hero__direction-button hero__buttons">
              🗺️ Get Directions
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
