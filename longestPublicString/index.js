function csm (str1, str2) {
	let l1 = str1.length;
	let l2 = str2.length;
	let strArr1 = str1.split('');
	let strArr2 = str2.split('');
	let ma = [];
	let max = 0;
	for (let i = 0; i < l1; i++) {
		let sa = [];
		for (let j = 0; j < l2; j++) {
			sa[j] = 0;
		}
		ma.push(sa);
	}
 
	for (let m = 0; m < l1+1; m++) {
		for (let n = 0; n < l2+1; n++) {
		    if (strArr1[m] === strArr2[n]) {
		        //处理边界
				if (m == 0 || n == 0) {
					ma[m][n] = 1;
				} else {
					ma[m][n] = ma[m - 1][n - 1] + 1;
				}
				max = Math.max(max, ma[m][n]);
			}
		}
	}
	return max;
}