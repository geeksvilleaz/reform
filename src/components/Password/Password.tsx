import React from 'react';
import './Password.scss';

interface IProps {
  placeholder: string;
  id: string;
  value: string;
  isRequired?: boolean;
}

const Password: React.FC<IProps> = ({placeholder, id, value, isRequired = false}) => {
  return (
    <input
      className="password"
      id={id}
      name={id}
      type="password"
      placeholder={placeholder}
      defaultValue={value}
      autoComplete="off"
      required={isRequired}
    />
  )
};

Password.displayName = 'input';

export default Password;
