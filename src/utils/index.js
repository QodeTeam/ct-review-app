import { showNotification } from '../shared/components/Notifications';

export const noop = () => {};

export const guidGenerator = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
  return (`${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
};

export const displayErrors = (currentErrors, nextErrors) => {
  const _currentErrors = currentErrors
    && currentErrors.filter(error => !(error === null || error === undefined));
  const _nextErrors = nextErrors
    && nextErrors.filter(error => !(error === null || error === undefined));
  for (let i = 0; i <= _nextErrors.length - 1; i++) {// eslint-disable-line
    if (
      (_currentErrors && _currentErrors.length > 0
        && _currentErrors[i] && _currentErrors[i].message)
        !== (_nextErrors && _nextErrors.length > 0 && _nextErrors[i].message)
    ) {
      if (_nextErrors[i].message) showNotification(_nextErrors[i].message, 'error', 8000);
    }
  }
  return false;
};

export const Ellipsis = (string, noOfCharacters) => {
  if (string && string.length > 0) {
    const clampedLines = `${string.substring(0, noOfCharacters)}${string.substring(noOfCharacters).length > 0 ? '...' : ''}`;
    return clampedLines;
  }
  return '';
};
