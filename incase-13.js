var nextPermutation = function (nums) {
	// let i = nums.length-1;

	for (let i = nums.length - 1; i >= 0; i--) {
		let j = i - 1;
		while (j >= 0) {
			let temp = nums[i];

			if (temp > nums[j]) {
				if (j + 1 === i) {
					nums[i] = nums[j];
					nums[j] = temp;
					return nums;
				}
				let secondEle = nums[j + 1];
				nums[i] = secondEle;
				nums[j + 1] = nums[j];
				nums[j] = temp;
				return nums;
			}
			j--;
		}
	}
	return nums.reverse();
};
function helperFunc(items, k) {
	if (items.length === 0) return [[]];
	let [a, ...b] = items;
	let rest = helperFunc(b);
	let comb = [];
	for (let sub of rest) {
		let val = [a, ...sub];
		comb.push(val);
	}
	return [...rest, ...comb];
}
const createCombinations = (items, k) => {
	let temp = [];
	let all = helperFunc(items, k);
	return all.filter((ele) => ele.length === k);
	// temp.push(...all)
};
// nextPermutation([1,3,2])

createCombinations([1, 2, 3], 2);
