const AuthToggle = ({ isLogin, onToggle }) => {
  return (
    <div className="auth-toggle-link">
      {isLogin ? (
        <p>
          Haven't started playing yet ?{' '}
          <button type="button" className="auth-toggle-btn" onClick={onToggle}>
            Signup now
          </button>
        </p>
      ) : (
        <p>
          Already a player ?{' '}
          <button type="button" className="auth-toggle-btn" onClick={onToggle}>
            Login now
          </button>
        </p>
      )}
    </div>
  );
};

export default AuthToggle;
