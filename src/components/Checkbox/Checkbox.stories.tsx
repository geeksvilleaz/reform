import React from 'react';
import Checkbox, { IProps } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox Component'
};

const Template: React.FC<IProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'dope',
  name: 'dope',
  value: 'dope',
  label: 'Dope'
};