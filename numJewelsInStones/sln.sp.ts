function findLongestStr(s) {
	const arr = [];
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		if (arr.includes(s[i])) {
			arr.splice(0, arr.indexOf(s[i]) + 1);
		}
		arr.push(s[i]);
		max = Math.max(arr.length, max);
	}
	return max;
}