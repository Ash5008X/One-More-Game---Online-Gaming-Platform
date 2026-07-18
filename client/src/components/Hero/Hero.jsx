import heroImg from '../../assets/images/hero.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background grid pattern */}
      <div className="hero__grid-bg"></div>

      <div className="hero__container">
        {/* Left column — text content */}
        <div className="hero__content">
          <div className="hero__heading-wrap">
            <h1 className="hero__heading">
              PLAY.<br />COMPETE.<br />CONQUER.
            </h1>
            <div className="hero__stamp">JUST ONE MORE.....</div>
          </div>

          <p className="hero__description">
            The ultimate high-stakes ecosystem for competitive players. No respawns for your reputation. Dominate the leaderboard or stay in the lobby.
          </p>

          <div className="hero__buttons">
            <button className="hero__btn-primary">START PLAYING NOW</button>
            <button className="hero__btn-secondary">VIEW TOURNAMENTS</button>
          </div>
        </div>

        {/* Right column — image */}
        <div className="hero__media">
          <div className="hero__image-frame">
            <div className="hero__image-overlay"></div>
            <img
              className="hero__image"
              src={heroImg}
              alt="Futuristic cyberpunk gaming scene with neon lights and armored soldiers"
            />

            {/* Floating Stats */}
            <div className="hero__stat-online">
              <span className="hero__stat-dot"></span>
              <span className="hero__stat-text">50K ONLINE</span>
            </div>

            <div className="hero__stat-season">
              <span className="material-symbols-outlined">military_tech</span>
              <span className="hero__stat-text">SEASON 4 LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
