import number from './number';

const decimal = Object.assign({}, number);

decimal.format = function (v) {
  if (v === undefined || v === null) return '';
  let value;
  if (v.toString().includes('.')) {
    value = parseFloat(Math.round(v * 100) / 100).toFixed(2).toString();
  } else {
    value = parseInt(v, 10);
  }
  const parts = value.toString().split('.');
  let result = number.splitNumberByGroups(parts[0]);
  if (parts[1]) {
    result = `${result}.${parts[1]}`;
  }
  return result;
};

export default decimal;
