var majorityElement = function (nums) {
	if (nums.length === 0) return null;
	// nums.sort((a,b)=>a-b);
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		if (!map[nums[i]]) {
			map[nums[i]] = 0;
		}
		map[nums[i]]++;
	}
	let max = 0;
	let val;
	for (let key in map) {
		// console.log(max)
		if (max < map[key]) {
			max = map[key];
			val = key;
		}
	}
	console.log(max);
	return val;
};

majorityElement([3, 2, 3]);
