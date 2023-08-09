import number from './number';

const piece = Object.assign({}, number);

piece.format = function(x) {
	return `${number.splitNumberByGroups(x)} шт.`;
};

export default piece;
