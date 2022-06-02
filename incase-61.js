var permuteUnique = function (nums) {
	function uniquePerm(arr, map) {
		if (arr.length === 0) return [[]];
		let [a, ...b] = arr;
		// let first  = arr[0];
		// let second =
		let rest = uniquePerm(arr.slice(1), map);
		let uniquePermutaionList = [];
		for (let perm of rest) {
			for (let i = 0; i <= perm.length; i++) {
				let val = [...perm.slice(0, i), a, ...perm.slice(i)];
				let key = [...val].join("");
				if (!map[key]) {
					uniquePermutaionList.push(val);
					map[key] = true;
				}
			}
		}
		return uniquePermutaionList;
	}
	return uniquePerm(nums, {});
};

permuteUnique([1, 1, 2]);
