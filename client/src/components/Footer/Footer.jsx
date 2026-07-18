import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__logo-text">ONE MORE GAME</h2>
            <div className="footer__stamp">NO SLEEP TILL DAWN</div>
          </div>
          
          <div className="footer__links">
            <a className="footer__link" href="#">Terms</a>
            <a className="footer__link" href="#">Privacy</a>
            <a className="footer__link" href="#">Cookies</a>
            <a className="footer__link" href="#">Careers</a>
          </div>

          <div className="footer__socials">
            <a className="footer__social-btn" href="#">
              <span className="material-symbols-outlined">play_arrow</span>
            </a>
            <a className="footer__social-btn" href="#">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a className="footer__social-btn footer__social-btn--primary" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p className="footer__copyright">© 2024 ONE MORE GAME. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
