import decimal from './decimal';

const currency = Object.assign({}, decimal);

currency.format = function(x) {
	return `${decimal.format(x)} ₽`;
};

export default currency;
