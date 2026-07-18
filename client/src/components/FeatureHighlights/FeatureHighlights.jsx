import './FeatureHighlights.css';

const FeatureHighlights = () => {
  return (
    <section className="feature-highlights">
      <div className="feature-highlights__inner">
        <div className="bento-grid">
          {/* Block 1: Massive Stat */}
          <div className="bento-item--massive">
            <div>
              <span className="material-symbols-outlined">groups</span>
              <h3>MASSIVE MULTIPLAYER LOBBIES</h3>
            </div>
            <div className="bento-bottom">
              <p>Drop into 100-player hubs instantly. No loading screens. Pure action.</p>
              <button>
                <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Block 2: Achievements */}
          <div className="bento-item--achievements">
            <div className="icon-box">
              <span className="material-symbols-outlined">military_tech</span>
            </div>
            <div>
              <h4>GLOBAL RANKING</h4>
              <p>SHOW YOUR WORTH</p>
            </div>
          </div>

          {/* Block 3: Social */}
          <div className="bento-item--social">
            <span className="material-symbols-outlined">forum</span>
            <h4>VOICE COMMS</h4>
          </div>

          {/* Block 4: Trending Mini */}
          <div className="bento-item--trending">
            <div className="icon-side">
              <div className="icon-side-pattern"></div>
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div className="content-side">
              <div className="stamp">NEW FEATURE</div>
              <h4>CROSS-PLATFORM PLAY</h4>
              <p>Console vs PC. Settle the debate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
