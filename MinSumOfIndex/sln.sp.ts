function findMinSum(list1, list2) {
	const map = new Map();
	const arr = [];
	list1.forEach((item) => {
		if (list2.includes(item)) {
			map.set(item, list1.indexOf(item) + list2.indexOf(item));
		}
	});
	const min = Math.min.apply(null, [...map.values()]);
	for (let [key, val] of map) {
		if (val === min) {
			arr.push(key);
		}
	}
	return arr;
}