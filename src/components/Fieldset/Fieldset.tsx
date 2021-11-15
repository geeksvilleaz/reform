import React from 'react';
import './Fieldset.scss';

interface IProps {
  legend?: string;
  children: any;
}

const Fieldset: React.FC<IProps> = ({ legend, children }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>

      {children}
    </fieldset>
  );
};

export default Fieldset;
