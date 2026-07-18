import { useState } from 'react';
import Input from './Input';
import PasswordInput from './PasswordInput';
import SocialLogin from './SocialLogin';
import AuthToggle from './AuthToggle';

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4 12 13 2 4" />
  </svg>
);

const RegisterForm = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Register submitted:', formData);
  };

  return (
    <div className="auth-form-panel">
      <div className="auth-form-content">
        <h2 className="auth-form-title">CREATE ACCOUNT</h2>
        <p className="auth-form-subtitle">Start your journey. Become a legend.</p>

        <form onSubmit={handleSubmit} className="auth-form" autoComplete="on">
          <Input
            type="text"
            placeholder="Fullname"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            icon={<UserIcon />}
          />

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
            autoComplete="new-password"
          />

          <PasswordInput
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />

          <button type="submit" className="auth-submit-btn" id="register-btn">
            <span>CREATE ACCOUNT</span>
            <span className="auth-btn-arrow">→</span>
          </button>
        </form>

        <SocialLogin />
        <AuthToggle isLogin={false} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default RegisterForm;
