import React from 'react';
import './Input.scss';

interface IProps {
  placeholder?: string;
  id: string;
  value?: string;
  isRequired?: boolean;
}

const Input: React.FC<IProps> = ({placeholder, id, value, isRequired = false}) => {
  return (
    <input
      className="input"
      id={id}
      name={id}
      placeholder={placeholder}
      defaultValue={value}
      required={isRequired}
      aria-required={isRequired}
    />
  )
};

Input.displayName = 'input';

export default Input;
