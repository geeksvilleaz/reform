declare module RF {
  interface Input extends Field {
    type: InputTypes;
    id: string;
    name: string;
    value: string | number;
    checked: boolean;
  }

  interface Field {
    label?: string;
  }

  const InputTypes = 'checkbox'
    | 'date'
  | 'email';

}