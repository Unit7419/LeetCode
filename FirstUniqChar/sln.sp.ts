function firstUniqChar(str) {
	const map = {};
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (!map[char]) {
			map[char] = 1;
		} else {
			map[char]++;
		}
	}

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (map[char] === 1) {
			return char;
		}
	}
}

function isHappy(n) {
	if (n === 1) return true;
	n = n + '';
	const list = new Set();
	while(!list.has(n)) {
		list.add(n);
		let sum = 0;
		for (let num of n) {
			sum += num * num;
		}
		if (sum === 1) return true;
		n = sum;
	}
	return false;
}