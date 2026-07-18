import { useState } from 'react';

const Input = ({
  type = 'text',
  placeholder,
  icon,
  value,
  onChange,
  name,
  id,
  required = false,
  autoComplete,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`auth-input-wrapper ${isFocused ? 'focused' : ''}`}>
      {icon && <span className="auth-input-icon">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id || name}
        required={required}
        autoComplete={autoComplete}
        className="auth-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label={placeholder}
      />
    </div>
  );
};

export default Input;
