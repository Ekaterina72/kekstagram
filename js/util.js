const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }

  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(max, min));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const createList = (quantity, createFunc) => Array.from({ length: quantity }, createFunc);


export { getRandomNumber, checkStringLength, createList };
