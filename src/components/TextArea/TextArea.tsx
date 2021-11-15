import React from 'react';
import './TextArea.scss';

interface IProps {
  placeholder: string;
  onChange: any;
  value: string;
  id: string;
}

const TextArea: React.FC<IProps> = ({ placeholder, onChange, value, id }) => {
  const handleChange = (event) => {
    const { currentTarget: { value }} = event;
    onChange && onChange({[id]: value});
  };

  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className="textarea"
      rows={6}
      value={value}
      onChange={handleChange}
    >
    </textarea>
  );
};

TextArea.displayName = 'textarea';

export default TextArea;
