var frequencySort = function (nums) {
	let map = {};
	// nums.sort((a,b)=>a-b);
	// let arr =[]
	for (let i = 0; i < nums.length; i++) {
		let key = nums[i];
		if (!map[key]) {
			map[key] = 1;
		} else {
			map[key]++;
		}
	}
	let arr = Object.entries(map);
	arr.sort((a, b) => {
		if (a[1] === b[1]) {
			return b[0] - a[0];
		} else {
			return a[1] - b[1];
		}
	});
	let val = [];
	for (let i = 0; i < arr.length; i++) {
		while (arr[i][1] > 0) {
			val.push(+arr[i][0]);
			arr[i][1]--;
		}
	}
	return val;
};

frequencySort([2, 3, 1, 3, 2]);
