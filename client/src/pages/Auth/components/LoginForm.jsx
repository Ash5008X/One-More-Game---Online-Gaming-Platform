import { useState } from 'react';
import Input from './Input';
import PasswordInput from './PasswordInput';
import SocialLogin from './SocialLogin';
import AuthToggle from './AuthToggle';

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4 12 13 2 4" />
  </svg>
);

const LoginForm = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="auth-form-panel">
      <div className="auth-form-content">
        <h2 className="auth-form-title">LOGIN</h2>
        <p className="auth-form-subtitle">Continue playing. The arena awaits.</p>

        <form onSubmit={handleSubmit} className="auth-form" autoComplete="on">
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            icon={<MailIcon />}
          />

          <PasswordInput
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />

          <div className="auth-form-options">
            <label className="auth-remember" htmlFor="rememberMe">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span className="auth-checkbox-custom"></span>
              Remember Me
            </label>
            <button type="button" className="auth-forgot-link">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="auth-submit-btn" id="login-btn">
            <span>LOGIN</span>
            <span className="auth-btn-arrow">→</span>
          </button>
        </form>

        <SocialLogin />
        <AuthToggle isLogin={true} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default LoginForm;
