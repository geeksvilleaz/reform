import React from 'react';
import './Select.scss';

interface IProps {
  options: {
    label: string;
    value: string;
  }[];
  id: string;
  placeholder: string;
  value: string;
  onChange: any;
}

const Select: React.FC<IProps> = ({ options, id, placeholder, value, onChange }) => {
  const handleChange = (event: any) => {
    onChange && onChange(event.currentTarget.value);
  };

  return (
    <select id={id} className="select" placeholder={placeholder} onChange={handleChange} value={value}>
      {options.map((option, key) => (
        <option key={key} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

Select.displayName = 'select';

export default Select;
