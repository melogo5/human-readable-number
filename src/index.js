module.exports = function toReadable (number) {
	if(number == 0) return 'zero';
	const data = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15:	'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty', 
		50: 'fifty', 
		60: 'sixty', 
		70: 'seventy', 
		80: 'eighty', 
		90: 'ninety',
		100: 'hundred',
	};
	let result = [];
	let count = 0;
	number = number.toString().split('');
	for (let i = number.length - 1; i >= 0; i--) {
		if (count == 0 && number[i - 1] == '1') {
			result.unshift(data[(number[i - 1] + number[i])]);
			i--;
			count += 2;
			continue;
		}
		switch (count) {
			case 1:
				if (number[i] == '0') break;
				result.unshift(data[number[i] + '0']);
				break;
			case 2:
				if (number[i] == '0') break;
				result.unshift(data[number[i]] + ' ' + data[100]);
				break;
			default:
				if (number[i] == '0') break;
				result.unshift(data[number[i]]);
				break;
		}
		count++;
	}
	return result.join(' ');
}
