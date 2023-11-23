export const validateCompany = (value) => {
  return value.startsWith('@') && (value.match(/@/g) || []).length === 1;
}

export const validateSearchInput = (input) => {
  const trimmedInput = input.trim();
  const hasSpaces = /\s/.test(trimmedInput);
  let isValid = trimmedInput !== '' && !hasSpaces;
  let errorText = '';

  if (!isValid) {
    if (trimmedInput === '') {
      errorText = 'Field cannot be empty';
    } else if (hasSpaces) {
      errorText = 'Field cannot contain spaces';
    }
  }

  return { isValid, errorText };
};

export const validateUrl = (str) => {
  let url = str.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};
