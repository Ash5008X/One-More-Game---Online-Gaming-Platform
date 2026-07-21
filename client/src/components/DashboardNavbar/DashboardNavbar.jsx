import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './DashboardNavbar.css';

const DashboardNavbar = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <header className="dash-nav">
      {/* Logo Area */}
      <div className="dash-nav__brand">
        <Link to="/" className="dash-nav__wordmark">ONE MORE GAME</Link>
        <div className="dash-nav__badge">JUST ONE MORE....</div>
      </div>

      {/* Navigation Links */}
      <nav className="dash-nav__links">
        <Link to="/dashboard" className="dash-nav__link dash-nav__link--active">DASHBOARD</Link>
        <Link to="/games" className="dash-nav__link">GAMES</Link>
        <a className="dash-nav__link" href="#">LEADERBOARDS</a>
        <a className="dash-nav__link" href="#">ACHIEVEMENTS</a>
      </nav>

      {/* Trailing Actions */}
      <div className="dash-nav__actions">
        <button className="dash-nav__icon-btn" aria-label="Search">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="dash-nav__icon-btn dash-nav__icon-btn--notify" aria-label="Notifications">
          <span className="material-symbols-outlined">notifications</span>
          <span className="dash-nav__notify-dot"></span>
        </button>
        <button className="dash-nav__icon-btn" aria-label="Logout" onClick={handleLogout} title="Logout">
          <span className="material-symbols-outlined">logout</span>
        </button>
        <div className="dash-nav__avatar" onClick={() => navigate('/dashboard')}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#00ff0d' }}>person</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
