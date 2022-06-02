const pairSum = (numbers, targetSum) => {
	// todo
	let nums = [...numbers].sort((a, b) => a - b);
	let i = 0;
	// let mid = Math.floor(nums.length/2);
	let firstNum;
	let secondNum;
	let end = nums.length - 1;
	while (i <= end) {
		let sum = nums[i] + nums[end];
		if (sum > targetSum) {
			end--;
		} else if (sum < targetSum) {
			i++;
		} else {
			firstNum = nums[i];
			secondNum = nums[end];
			break;
		}
	}
	console.log(targetSum);
	console.log(numbers);
	let fIdx = numbers.indexOf(numbers.splice());
	let sIdx = numbers.indexOf(secondNum);
	return [fIdx, sIdx];
};
const pairSum2 = (numbers, targetSum) => {
	// todo
	let obj = {};
	for (let i = 0; i < numbers.length; i++) {
		let diff = targetSum - numbers[i];
		if (!obj[diff]) {
			obj[diff] = [];
		}
		if (!obj[diff].includes(i)) {
			obj[diff].push(i);
		}
	}
	for (let j = 0; j < numbers.length; j++) {
		let idx = obj[numbers[j]];
		if (obj[numbers[j]] && idx.length === 2) {
			return idx;
		}
		if (obj[numbers[j]] && idx[0] !== j) {
			return [j, obj[numbers[j]][0]];
		}
	}
	return [];
};
pairSum2([9, 9], 18);
