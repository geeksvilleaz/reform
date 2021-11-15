import React, { useEffect, useState } from './react';
import Checkbox from '../Checkbox/Checkbox';
import Field from '../Field/Field';
import Fieldset from '../Fieldset/Fieldset';
import './CheckboxList.scss';

interface IProps {
  id: string;
  options: any[];
  label?: string;
  value?: string[];
  onChange?: any;
  errors?: string[];
}

const CheckboxList: React.FC<IProps> = ({ id, options, label, onChange, errors }) => {
  const [valueList, setValueList] = useState<string[]>([]);

  const handleChange = (val: string, isChecked: boolean) => {
    const newList = isChecked
      ? [...valueList, val]
      : valueList.filter(item => item !== val);

    setValueList(newList);
  };

  useEffect(() => {
    onChange && onChange({[id]: valueList});
  }, [valueList]);

  return (
    <div className={`checkbox-list ${errors && 'errors'}`}>
      <Fieldset legend={label}>
        {errors && errors.map((error, key) => (<div className="error" key={key}>{error}</div>))}

        {options.map((option: string, key: number) => (
          <Field
            key={key}
            label={option}
            id={`${id}-${option}`}
            value={option}
            onChange={handleChange}
            FieldType={Checkbox}
          />
        ))}
      </Fieldset>
    </div>
  );
};

export default CheckboxList;
