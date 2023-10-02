import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';

export const removeUndefinedProps = <T>(object: T) => {
  if (isObject(object)) {
    Object.keys(object).forEach((key) => {
      if (isUndefined(object[key as keyof typeof object])) {
        delete object[key as keyof typeof object];
      }

      removeUndefinedProps(object[key as keyof typeof object]);
    });
  }
};
