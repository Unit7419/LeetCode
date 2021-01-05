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