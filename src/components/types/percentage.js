import number from './number';

const percentage = Object.assign({}, number);

percentage.format = function (v) {
  if (v === undefined || v === null) return '';
  return `${v}%`;
};

export default percentage;
