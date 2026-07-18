import logoImg from '../../../assets/logos/one-more-game-logo.png';

const AuthHeader = ({ isLogin }) => {
  return (
    <div className="auth-welcome-panel">
      {/* Logo - completely static */}
      <div className="auth-logo">
        <img src={logoImg} alt="One More Game Logo" className="auth-logo-image" />
      </div>


      <div className="auth-welcome-content">
        {/* Heading */}
        <div className="auth-welcome-stagger auth-welcome-text">
          {isLogin ? (
            <>
              <h1 className="auth-welcome-heading">
                WELCOME BACK,<br />
                <span className="auth-welcome-highlight">PLAYER.</span>
              </h1>
              <p className="auth-welcome-desc">
                Your leaderboard<br />is waiting.
              </p>
            </>
          ) : (
            <>
              <h1 className="auth-welcome-heading">
                NEW HERE?<br />
                <span className="auth-welcome-highlight">WELCOME<br />PLAYER.</span>
              </h1>
              <p className="auth-welcome-desc">
                Every legend starts<br />with one more game.
              </p>
            </>
          )}
        </div>

        {/* Stats Cards */}
        <div className="auth-welcome-stagger auth-stats">
          <div className="auth-stat-item">
            <span className="material-symbols-outlined auth-stat-icon auth-stat-icon--green">emoji_events</span>
            <div className="auth-stat-content">
              <strong>24+ GAMES</strong>
              <span>Endless fun. One platform.</span>
            </div>
          </div>
          <div className="auth-stat-item">
            <span className="material-symbols-outlined auth-stat-icon auth-stat-icon--blue">star</span>
            <div className="auth-stat-content">
              <strong>450+ ACHIEVEMENTS</strong>
              <span>Unlock. Collect. Flex.</span>
            </div>
          </div>
          <div className="auth-stat-item">
            <span className="material-symbols-outlined auth-stat-icon auth-stat-icon--orange">group</span>
            <div className="auth-stat-content">
              <strong>120K+ PLAYERS</strong>
              <span>Be part of the community.</span>
            </div>
          </div>
        </div>
      </div> {/* auth-welcome-content */}

    </div>
  );
};

export default AuthHeader;
