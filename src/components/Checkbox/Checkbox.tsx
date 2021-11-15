import React from 'react';
import './Checkbox.scss';

export interface IProps {
  value?: string;
  id?: string;
  name?: string;
  isChecked?: boolean;
}

const Checkbox: React.FC<IProps> = ({ value, id, name, isChecked }) => {
  return (
    <input
      className="checkbox"
      type="checkbox"
      value={value}
      id={id}
      name={name}
      defaultChecked={isChecked}
    />
  );
};

Checkbox.displayName = 'checkbox';

export default Checkbox;
