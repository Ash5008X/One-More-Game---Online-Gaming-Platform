import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Wordmark and Badge */}
      <div className="navbar__brand">
        <a className="navbar__wordmark" href="#">ONE MORE GAME</a>
        <div className="navbar__badge">just one more.....</div>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar__links">
        <a className="navbar__link" href="#">HOME</a>
        <a className="navbar__link" href="#">DISCOVER</a>
        <a className="navbar__link" href="#">FEATURES</a>
        <a className="navbar__link" href="#">ABOUT</a>
      </div>

      {/* Right: CTA Button */}
      <div className="navbar__cta-wrap">
        <Link to="/auth" className="navbar__cta" style={{ textDecoration: 'none', display: 'inline-block' }}>
          PLAY NOW →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
