import React from 'react';
import Form, { IProps } from './Form';
import { EMPTY, EMAIL, MIN_LENGTH } from '../../services/form-validation.service';
import Field from '../Field/Field';
import Input from '../Input/Input';
import Password from '../Password/Password';
import Checkbox from '../Checkbox/Checkbox';
import Select from '../Select/Select';
import Button from '../Button/Button';

export default {
  component: Form,
  title: 'Form Component'
};

const initialState: any = {
  name: 'Bill Bailey',
  email: 'bill.bailey@choicehotels.com',
  password: 'password',
  remember: true,
  options: 1
};

const formValidation: any = {
  name: [EMPTY],
  email: [EMPTY, EMAIL],
  password: [EMPTY, MIN_LENGTH(5)],
  remember: [],
  options: ''
};

const options = [
  {label: 'One', value: 1},
  {label: 'Two', value: 2},
  {label: 'Three', value: 3}
];

const handleSelectChange = (value: number | string) => {
  console.log({value});
};

const handleFormSubmit = () => {};

const Template: React.FC<IProps> = ({ children, ...args }) => <Form {...args}>{children}</Form>

export const Default: React.FC<IProps> = ({}) => (
  <Form initialState={initialState} formValidation={formValidation}>
    <h2>User Registration Page</h2>

    <Field
        id="name"
        label="Full Name"
        placeholder="Please enter your first and last name."
        FieldType={Input}
        isRequired
      />

      <Field
        id="email"
        label="Email Address"
        placeholder="Please enter your Choice email address."
        FieldType={Input}
      />

      <Field
        id="password"
        label="Password"
        placeholder="Please enter a strong password."
        FieldType={Password}
      />

      <Field
        id="remember"
        label="Remember Me"
        FieldType={Checkbox}
        value="Remember Me"
        isChecked
      />

      <Field 
        id="options"
        label="Options"
        FieldType={Select}
        options={options}
        onChange={handleSelectChange}
      />

      <Button label="Register" type="submit" />
  </Form>
);