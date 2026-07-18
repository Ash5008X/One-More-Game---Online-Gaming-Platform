import game1Img from '../../assets/images/game1.png';
import game2Img from '../../assets/images/game2.png';
import game3Img from '../../assets/images/game3.png';
import './FeaturedGames.css';

const games = [
  {
    id: 1,
    image: game1Img,
    tag: 'RPG / SURVIVAL',
    name: 'ECLIPSE WOODS',
    description: 'Survive the shadow realm. High-stakes permadeath combat.',
    players: '12,402 PLAYING',
    alt: 'Dark fantasy illustration of a rogue character at the entrance of a bioluminescent forest',
  },
  {
    id: 2,
    image: game2Img,
    tag: 'ARCADE RACER',
    name: 'NEON OVERDRIVE',
    description: 'Mach-speed death races. No brakes, no mercy.',
    players: '8,991 PLAYING',
    alt: 'Hyper-saturated sci-fi racing scene with hover cars on a futuristic highway',
  },
  {
    id: 3,
    image: game3Img,
    tag: 'TACTICAL SHOOTER',
    name: 'GALACTIC FRONTIER',
    description: 'Squad-based extraction shooter. Secure the payload.',
    players: '34,110 PLAYING',
    alt: 'Space marine combat scene with plasma weapons against alien insectoids',
  },
];

const FeaturedGames = () => {
  return (
    <section className="featured-games">
      <div className="featured-games__inner">
        {/* Section header */}
        <div className="featured-games__header">
          <h2 className="featured-games__title">FEATURED ARENAS</h2>
          <a className="featured-games__view-all" href="#">VIEW ALL GAMES</a>
        </div>

        {/* Game cards grid */}
        <div className="featured-games__grid">
          {games.map((game) => (
            <div className="game-card" key={game.id}>
              <div className="game-card__image-wrap">
                <img
                  className="game-card__image"
                  src={game.image}
                  alt={game.alt}
                />
                <div className="game-card__tag">{game.tag}</div>
              </div>
              <div className="game-card__body">
                <h3 className="game-card__name">{game.name}</h3>
                <p className="game-card__desc">{game.description}</p>
                <div className="game-card__footer">
                  <div className="game-card__players">
                    <span className="game-card__player-dot"></span>
                    <span className="game-card__player-count">{game.players}</span>
                  </div>
                  <span className="material-symbols-outlined game-card__arrow">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
