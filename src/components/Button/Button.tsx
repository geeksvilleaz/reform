import React from 'react';
import './Button.scss';

interface IProps {
  className?: string;
  label: string;
  onClick?: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<IProps> = ({
  className,
  label,
  onClick,
  type,
  ...buttonProps
}) => {
  return (
    <button
      className={`button ${className || ""}`}
      onClick={onClick}
      type={type}
      {...buttonProps}
    >
      {label}
    </button>
  );
};

Button.displayName = 'button';

export default Button;
