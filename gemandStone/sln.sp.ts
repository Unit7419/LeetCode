function numInStones(j, s) {
	const set = new Set();
	for (let i = 0; i < j.length; i++) {
		set.add(j[i]);
	}
	const num = 0;
	for (let i = 0; i < s.length; i++) {
		if (set.has(s[i])) {
			num++;
		}
	}
	return num;
}