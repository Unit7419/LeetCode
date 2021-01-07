function containsNearDu(arr, k) {
	return arr.some((item, i) => {
		const sliceArr = arr.slice(i + 1, i + 1 + k);
		return sliceArr.includes(item);
	})
}