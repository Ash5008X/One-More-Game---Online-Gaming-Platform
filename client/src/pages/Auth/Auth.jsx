import { useState, useEffect, useCallback } from 'react';
import { AuthHeader, LoginForm, RegisterForm } from './components';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [transitionState, setTransitionState] = useState('idle');

  const toggleMode = useCallback(() => {
    if (transitionState !== 'idle') return;
    
    setTransitionState('preparing');
    
    // Phase 1: 120ms connector glow
    setTimeout(() => {
      setTransitionState('collapsing');
      
      // Phase 2 & 3: 450ms collapse fold
      setTimeout(() => {
        setIsLogin((prev) => !prev);
        setTransitionState('expanding');
        
        // Phase 5: 450ms expand unfold
        setTimeout(() => {
          setTransitionState('idle');
        }, 450);
      }, 450);
    }, 120);
  }, [transitionState]);

  return (
    <div className={`auth-page ${isLogin ? 'is-login' : 'is-register'} is-${transitionState}`}>
      {/* Animated Gaming Background */}
      <div className="auth-bg">
        <div className="auth-bg-grid"></div>
        <div className="auth-bg-glow auth-bg-glow--1"></div>
        <div className="auth-bg-glow auth-bg-glow--2"></div>
        <div className="auth-bg-glow auth-bg-glow--3"></div>
        <div className="auth-bg-glow auth-bg-glow--4"></div>
        {/* Floating neon squares */}
        <div className="auth-bg-square auth-bg-square--1"></div>
        <div className="auth-bg-square auth-bg-square--2"></div>
        <div className="auth-bg-square auth-bg-square--3"></div>
        <div className="auth-bg-square auth-bg-square--4"></div>
        <div className="auth-bg-square auth-bg-square--5"></div>
        <div className="auth-bg-square auth-bg-square--6"></div>
        <div className="auth-bg-square auth-bg-square--7"></div>
        <div className="auth-bg-square auth-bg-square--8"></div>
        {/* Diagonal neon lines */}
        <div className="auth-bg-line auth-bg-line--1"></div>
        <div className="auth-bg-line auth-bg-line--2"></div>
        <div className="auth-bg-line auth-bg-line--3"></div>
        <div className="auth-bg-line auth-bg-line--4"></div>
      </div>

      {/* Auth Card */}
      <div className={`auth-card ${isLogin ? 'auth-card--login' : 'auth-card--register'}`}>
        {/* Green accent dots on card edges */}
        <div className="auth-card-accent auth-card-accent--tl"></div>
        <div className="auth-card-accent auth-card-accent--tr"></div>
        <div className="auth-card-accent auth-card-accent--bl"></div>
        <div className="auth-card-accent auth-card-accent--br"></div>
        <div className="auth-card-accent auth-card-accent--ml"></div>
        <div className="auth-card-accent auth-card-accent--mr"></div>

        {/* 
          Layout approach:
          Both panels sit in DOM order: [forms] [welcome]
          In LOGIN state:  forms at left (0%), welcome at right (stays)
          In REGISTER state: forms slides to right (100%), welcome slides to left (-100%)
          The welcome panel uses transform to slide over the form area.
        */}

        {/* Forms container — holds both login & register forms stacked */}
        <div className="auth-panel auth-panel--forms">
          <div className={`auth-form-slide ${isLogin ? 'active' : 'inactive'}`}>
            <LoginForm onToggle={toggleMode} />
          </div>
          <div className={`auth-form-slide ${!isLogin ? 'active' : 'inactive'}`}>
            <RegisterForm onToggle={toggleMode} />
          </div>
        </div>

        {/* Welcome overlay — slides to cover one side or the other */}
        <div className="auth-panel auth-panel--welcome">
          <AuthHeader isLogin={isLogin} />
        </div>

        {/* Center divider accent */}
        <div className="auth-divider"></div>
      </div>
    </div>
  );
};

export default Auth;
