export const validationTypes = {
  REQUIRED: 'REQUIRED',
  INVALID: 'INVALID',
};

export default (validationType, fieldName) => {
  switch (validationType) {
    case validationTypes.REQUIRED:
      return `${fieldName} is required`;
    case validationTypes.INVALID:
      return `Invalid ${fieldName}`;
    default:
      return '';
  }
};
