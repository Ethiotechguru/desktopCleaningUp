function permutation(arr) {
	if (arr.length === 0) return [[]];
	let a = arr[0];
	let comb = [];
	for (let sub of permutation(arr.slice(1))) {
		for (let i = 0; i <= sub.length; i++) {
			comb.push([...sub.slice(0, i), a, ...sub.slice(i)]);
		}
	}
	return comb;
}

permutation([1, 2, 3, 4]);
