import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';

// Image imports
import dashboardHero from '../../assets/images/dashboard_hero.png';
import gamePixelKombat from '../../assets/images/game_pixel_kombat.png';
import gameSnakeArena from '../../assets/images/game_snake_arena.png';
import gameByteCity from '../../assets/images/game_byte_city.png';
import gameCheckmate from '../../assets/images/game_checkmate.png';
import gameMinesweeper from '../../assets/images/game_minesweeper.png';
import gameSudoku from '../../assets/images/game_sudoku.png';
import gameConnectFour from '../../assets/images/game_connect_four.png';

import './Dashboard.css';

/* ------------------------------------------------------------------ */
/*  Sub-Components                                                      */
/* ------------------------------------------------------------------ */

/* Hero / Continue Playing */
const DashboardHero = () => (
  <section className="dash-hero brutal-card">
    <div
      className="dash-hero__bg"
      style={{ backgroundImage: `url(${dashboardHero})` }}
      aria-hidden="true"
    />
    <div className="dash-hero__overlay" aria-hidden="true" />
    <div className="dash-hero__content">
      <div>
        <span className="dash-hero__tag">CONTINUE PLAYING</span>
      </div>
      <div className="dash-hero__bottom">
        <div className="dash-hero__info">
          <h1 className="dash-hero__title">NEON OVERDRIVE:<br />2099</h1>
          <div className="dash-hero__progress-wrap">
            <span className="dash-hero__progress-pct">78%</span>
            <div className="dash-hero__progress-bar">
              <div className="dash-hero__progress-fill" style={{ width: '78%' }} />
            </div>
            <span className="dash-hero__progress-label">STORY</span>
          </div>
        </div>
        <div className="dash-hero__actions">
          <button className="dash-btn-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            RESUME GAME
          </button>
          <button className="dash-btn-icon" aria-label="Settings">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* Featured Games */
const FeaturedGamesCard = () => {
  const games = [
    { id: 1, title: 'PIXEL KOMBAT', genre: 'FIGHTING', rating: '4.8', img: gamePixelKombat },
    { id: 2, title: 'SNAKE ARENA', genre: 'ARCADE', rating: '4.5', img: gameSnakeArena },
    { id: 3, title: 'BYTE CITY 2049', genre: 'STRATEGY', rating: '4.2', img: gameByteCity },
  ];

  return (
    <section className="brutal-card dash-card">
      <div className="dash-card__header">
        <h2 className="dash-card__title">FEATURED GAMES</h2>
        <a className="dash-card__link" href="#">
          VIEW ALL <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="dash-game-list">
        {games.map((game, idx) => (
          <div
            key={game.id}
            className={`dash-game-item${idx < games.length - 1 ? ' dash-game-item--bordered' : ''}`}
          >
            <div className="dash-game-item__left">
              <img src={game.img} alt={game.title} className="dash-game-item__thumb" />
              <div>
                <h3 className="dash-game-item__name">{game.title}</h3>
                <div className="dash-game-item__meta">
                  <span className="dash-game-item__genre">{game.genre}</span>
                  <span className="dash-game-item__divider">|</span>
                  <span className="dash-game-item__rating">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '14px' }}>star</span>
                    {game.rating}
                  </span>
                </div>
              </div>
            </div>
            <button className="dash-play-btn" aria-label={`Play ${game.title}`}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

/* Library Awaits Banner (replaces Recently Played) */
const LibraryAwaitsBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="brutal-card dash-library-banner">
      <div className="dash-library-banner__glow" aria-hidden="true" />
      <div className="dash-library-banner__content">
        <div className="dash-library-banner__text">
          <div className="dash-library-banner__icon">
            <span className="material-symbols-outlined">sports_esports</span>
          </div>
          <div>
            <h2 className="dash-library-banner__title">Your Library Awaits</h2>
            <p className="dash-library-banner__desc">
              Browse our collection of arcade games and start your first adventure.
            </p>
          </div>
        </div>
        <button
          className="dash-btn-primary dash-library-banner__btn"
          onClick={() => navigate('/games')}
          aria-label="Browse games"
        >
          Browse →
        </button>
      </div>
    </section>
  );
};

/* Leaderboards */
const LeaderboardsCard = () => {
  const entries = [
    { rank: '01', name: 'ZERO_COOL_99', score: '125,840', color: 'green' },
    { rank: '02', name: 'WASTELAND_KING', score: '98,230', color: 'purple' },
    { rank: '03', name: 'ELVEN_SNIPER', score: '76,540', color: 'orange' },
  ];

  return (
    <section className="brutal-card dash-card">
      <div className="dash-card__header">
        <h2 className="dash-card__title">LEADERBOARDS</h2>
        <a className="dash-card__link" href="#">
          SHOW MORE <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <ul className="dash-leaderboard-list">
        {entries.map((entry, idx) => (
          <li
            key={entry.rank}
            className={`dash-leaderboard-item${idx < entries.length - 1 ? ' dash-leaderboard-item--bordered' : ''}`}
          >
            <div className="dash-leaderboard-item__left">
              <span className={`dash-leaderboard-item__rank dash-leaderboard-item__rank--${entry.color}`}>
                {entry.rank}
              </span>
              <span className="dash-leaderboard-item__name">{entry.name}</span>
            </div>
            <span className="dash-leaderboard-item__score">{entry.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

/* Friends Online */
const FriendsOnlineCard = () => {
  const friends = [
    { name: 'ZERO_COOL_99', status: 'Playing Neon Overdrive', statusColor: 'purple', indicator: 'online' },
    { name: 'WASTELAND_KING', status: 'Playing Galactic Frontier', statusColor: 'purple', indicator: 'online' },
    { name: 'ELVEN_SNIPER', status: 'AFK - In Menus', statusColor: 'gray', indicator: 'afk' },
  ];

  return (
    <section className="brutal-card dash-card">
      <div className="dash-card__header">
        <h2 className="dash-card__title">FRIENDS ONLINE</h2>
        <span className="dash-friends-count">3</span>
      </div>
      <div className="dash-friends-list">
        {friends.map((friend) => (
          <div key={friend.name} className="dash-friend-item">
            <div className="dash-friend-avatar">
              <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#84967c' }}>person</span>
              <span className={`dash-friend-indicator dash-friend-indicator--${friend.indicator}`} />
            </div>
            <div>
              <h4 className={`dash-friend-name${friend.indicator === 'afk' ? ' dash-friend-name--muted' : ''}`}>
                {friend.name}
              </h4>
              <p className={`dash-friend-status dash-friend-status--${friend.statusColor}`}>{friend.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* Quick Stats */
const QuickStatsCard = () => {
  const stats = [
    { label: 'GAMES PLAYED', value: '142', color: 'green' },
    { label: 'HIGHEST SCORE', value: '125k', color: 'purple' },
    { label: 'WIN RATE', value: '68%', color: 'orange' },
    { label: 'CURRENT RANK', value: '#84', color: 'white' },
  ];

  return (
    <section className="brutal-card dash-card dash-card--dark">
      <div className="dash-card__header">
        <h2 className="dash-card__title">QUICK STATS</h2>
        <a className="dash-card__link" href="#">EXPLORE MORE</a>
      </div>
      <div className="dash-stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="dash-stat-item">
            <span className="dash-stat-item__label">{stat.label}</span>
            <span className={`dash-stat-item__value dash-stat-item__value--${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* Achievement Progress */
const AchievementProgressCard = () => (
  <section className="brutal-card dash-card">
    <div className="dash-card__header">
      <h2 className="dash-card__title">ACHIEVEMENT PROGRESS</h2>
      <a className="dash-card__link" href="#">VIEW ALL</a>
    </div>
    <div className="dash-achievement-wrap">
      <div className="dash-achievement-level">
        <span className="dash-achievement-level__label">LEVEL</span>
        <span className="dash-achievement-level__value">42</span>
      </div>
      <div className="dash-achievement-details">
        <div className="dash-achievement-next">
          <p className="dash-achievement-next__label">NEXT ACHIEVEMENT</p>
          <div className="dash-achievement-next__header">
            <h4 className="dash-achievement-next__name">NEON MASTER</h4>
            <span className="dash-achievement-next__count">780 / 1000</span>
          </div>
          <div className="dash-progress-bar">
            <div className="dash-progress-bar__fill dash-progress-bar__fill--purple" style={{ width: '78%' }} />
          </div>
        </div>
        <div className="dash-achievement-recent">
          <div className="dash-achievement-recent__icon">
            <span className="material-symbols-outlined">military_tech</span>
          </div>
          <div>
            <p className="dash-achievement-recent__label">RECENT UNLOCK</p>
            <h5 className="dash-achievement-recent__name">OVERDRIVE INITIATED</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Play Next Carousel */
const PlayNextCard = () => {
  const games = [
    { title: 'CHECKMATE', genre: 'BOARD', rating: '4.7', img: gameCheckmate },
    { title: 'MINESWEEPER PRO', genre: 'PUZZLE', rating: '4.4', img: gameMinesweeper },
    { title: 'SUDOKU MASTER', genre: 'PUZZLE', rating: '4.9', img: gameSudoku },
    { title: 'CONNECT FOUR', genre: 'BOARD', rating: '4.1', img: gameConnectFour },
  ];

  return (
    <section className="brutal-card dash-card dash-play-next">
      <h2 className="dash-play-next__title">PLAY NEXT</h2>
      <div className="dash-play-next__track-wrap">
        <div className="dash-play-next__track no-scrollbar">
          {games.map((game) => (
            <div key={game.title} className="dash-play-next__item brutal-card">
              <img src={game.img} alt={game.title} className="dash-play-next__item-img" />
              <div className="dash-play-next__item-body">
                <h3 className="dash-play-next__item-name">{game.title}</h3>
                <div className="dash-game-item__meta">
                  <span className="dash-game-item__genre">{game.genre}</span>
                  <span className="dash-game-item__divider">|</span>
                  <span className="dash-game-item__rating">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '12px' }}>star</span>
                    {game.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* Ghost card */}
          <div className="dash-play-next__item dash-play-next__item--ghost brutal-card">
            <div className="dash-play-next__item-img dash-play-next__item-img--placeholder" />
            <div className="dash-play-next__item-body">
              <h3 className="dash-play-next__item-name">LOADING...</h3>
            </div>
          </div>
        </div>
        {/* VIEW ALL fade overlay */}
        <div className="dash-play-next__overlay">
          <a className="dash-play-next__view-all" href="#">
            VIEW ALL
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Dashboard Page Root                                                 */
/* ------------------------------------------------------------------ */
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  // Safe default in case user stats aren't loaded yet
  const gamesPlayed = user?.stats?.gamesPlayed || 0;
  const isNewUser = gamesPlayed === 0;

  return (
    <div className="dash-page">
      <DashboardNavbar />
      <main className="dash-main">
        {/* Conditional Top Section */}
        {isNewUser ? <LibraryAwaitsBanner /> : <DashboardHero />}

        <div className="dash-grid">
          <div className="dash-col dash-col--left">
            <FeaturedGamesCard />
            <LeaderboardsCard />
          </div>
          <div className="dash-col dash-col--right">
            <FriendsOnlineCard />
            <QuickStatsCard />
            <AchievementProgressCard />
          </div>
        </div>

        <PlayNextCard />
      </main>
    </div>
  );
};

export default Dashboard;
