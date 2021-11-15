export const EMPTY = 'empty';
export const MIN_LENGTH = (minLength: number) => `min.length.${minLength}`;
export const MAX_LENGTH = (maxLength: number) => `max.length.${maxLength}`;
export const CHECKED = 'checked';
export const EMAIL = 'email';
export const MIN_SIZE = (minSize: number) => `min.size.${minSize}`;

const ERRORS = {
  empty: 'This field cannot be empty.',
  minLength: 'This field must be at least {num} characters.',
  maxLength: 'This field cannot be over {num} characters.',
  email: 'Please enter a valid email address.',
  minSize: 'Please choose at least {num} selection(s).'
};

export function validates(form: any, rules: any) {
  const invalid: any = {};

  let valid = true;
  const formFields = Object.keys(form);

  const addInvalid = (field: any, error: any) => {
    if (invalid[field]) {
      invalid[field].push(error)
    } else {
      invalid[field] = [error];
    }
  };

  for (let x = 0; x < formFields.length; x++) {
    const field = formFields[x];
    const ruleArr = rules[field];
    const value = form[field];

    ruleArr.forEach((rule: string) => {
      switch (rule) {
        case EMPTY:
          if (value === '') {
            addInvalid(field, ERRORS.empty);
            valid = false;
          }
          break;

        case CHECKED:
          break;

        case EMAIL:
          break;

        default:
          if (/min\.length\.([0-9.])/.test(rule)) {
            if (value.length < Number(rule.match(/^min\.length\.([0-9]*)$/)[1])) {
              addInvalid(field, ERRORS.minLength.replace('{num}', rule.match(/^min\.length\.([0-9]*)$/)[1]));
              valid = false;
            }
          }

          if (/max\.length\.([0-9.])/.test(rule)) {
            if (value.length > Number(rule.match(/^max\.length\.([0-9]*)$/)[1])) {
              addInvalid(field, ERRORS.maxLength.replace('{num}', rule.match(/^max\.length\.([0-9]*)$/)[1]));
              valid = false;
            }
          }

          if (/min\.size\.([0-9])/.test(rule)) {
            if (value.length < Number(rule.match(/^min\.size\.([0-9]*)$/)[1])) {
              addInvalid(field, ERRORS.minSize.replace('{num}', rule.match(/^min\.size\.([0-9]*)$/)[1]));
              valid = false;
            }
          }
      }
    });
  }

  return invalid;
}
