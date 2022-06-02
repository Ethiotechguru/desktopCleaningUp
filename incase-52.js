var subsets = function (nums) {
	if (nums.length === 1) {
		return [[], [nums[0]]];
	}
	let map = {};
	let subsets = [[]];
	for (let i = 0; i < nums.length; i++) {
		let j = 0;
		if (!map[nums[i]] && !map[nums[i]]) {
			subsets.push([nums[i]]);
			map[nums[i]] = nums[i];
		}

		while (j < nums.length) {
			let arr = [];
			if (subsets[j]) {
				arr.push(...subsets[j]);
			} else if (j === nums.length - 1) {
				arr.push(subsets[nums.length - 1]);
			}

			arr.push(nums[j]);

			let key = arr.sort((a, b) => a - b, 0);
			if (!map[key]) {
				map[key] = arr;
				subsets.push(arr);
			}
			j++;
			if (i >= nums.length - 1) {
				for (let i = 0; i < arr.length; i++) {
					let count = i + 1;
					while (count < arr.length) {
						let arr1 = [arr[i], arr[count]];
						let slice = arr1.slice(i, count);
						let key = [...arr1];
						key.sort((a, b) => a - b);
						if (!map[key]) {
							map[key] = arr1;
							subsets.push(arr1);
						}
						let newSlice = [...slice];
						newSlice.sort((a, b) => a - b);
						if (!map[newSlice] && map[newSlice]) {
							map[newSlice] = slice;
							subsets.push(slice);
						}
						count++;
					}
				}
			}
		}
	}
	return subsets;
};
