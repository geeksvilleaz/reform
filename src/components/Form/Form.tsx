import React, { useState, useReducer, useEffect } from 'react';
import { validates } from '../../services/form-validation.service';
import _ from 'lodash';

export interface IProps {
  children: React.ReactElement<any>[];
  initialState: any;
  formValidation: any;
}

const reducer = (state: any, action: any) => {
  console.log({state, action});
  return {
    ...state,
    ...action
  };
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 */

const Form: React.FC<IProps> = ({ children, initialState, formValidation }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [formErrors, setFormErrors] = useState();
  const [renderedFields, setRenderedFields] = useState<any>();

  console.log('****** FORM RENDERING ******');

  useEffect(() => {
    const fields = React.Children.toArray(children);
    
    const toRender = fields.map(((field: any) => {
      const { id, FieldType, value } = field.props;

      console.log(field);
      
      const fieldValue = field.displayName === 'checkbox' ? value : initialState[id];
      
      return React.cloneElement(field, {
        value: fieldValue,
        errors: [],
      });
    }));

    setRenderedFields(toRender);
  }, []);
    
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    console.log('**** form output ****');
    renderedFields.forEach((field: any) => {
      field.props.id && console.log(field.props.id, formData.get(field.props.id));
    });
    console.log('**** end form output ****');
    
    // const errors = validates(formState, formValidation);

    // if (_.isEmpty(errors)) {
    //   // submit form
    // } else {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    //   setFormErrors(errors);
    // }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {renderedFields}
    </form>
  );
};

export default Form;
