import React from 'react';
import './Field.scss';

interface IProps {
  id: string;
  label: string;
  placeholder?: string;
  FieldType: any;
  onChange?: any;
  value?: string | number | undefined;
  errors?: string[];
  rows?: any;
  isChecked?: boolean;
  options?: any[];
  isRequired?: boolean;
}

const Field: React.FC<IProps> = ({
  FieldType,
  id,
  label,
  placeholder,
  onChange,
  rows,
  value,
  errors,
  isChecked,
  options,
  isRequired
}) => {
  return (
    <div
      className={`field ${errors && errors.length ? "field-error" : ""} field-${
        FieldType.displayName
      }`}
    >
      <label htmlFor={id}>
        {label}
        {isRequired && <span className="required">*</span>}
      </label>

      <FieldType
        {...{ id, placeholder, onChange, rows, value, isChecked, options, isRequired }}
      />

      {errors &&
        errors.map((error, key) => (
          <div key={key} className="error">
            {error}
          </div>
        ))}
    </div>
  );
};

export default Field;
