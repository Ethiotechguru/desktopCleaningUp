const pairSum = (numbers, targetSum) => {
	// todo
	let obj = {};
	for (let i = 0; i < numbers.length; i++) {
		let comp = targetSum - numbers[i];
		let num = numbers[i];
		if (obj[num] >= 0) {
			console.log("true life");
			return [obj[num], i];
		}
		obj[comp] = i;
	}
	console.log(obj);
};

// pairSum([ 3, 2, 5, 4, 1 ],8)

const findPairProduct = (arr, target) => {
	arr.sort((a, b) => a - b);
	let i = 0;
	let j = arr.length - 1;
	while (i < j) {
		let mult = arr[i] * arr[j];
		if (mult < target) {
			i++;
		} else if (mult > target) {
			j--;
		} else {
			return [arr[i], arr[j]];
		}
	}
};

findPairProduct([3, 2, 5, 4, 1, 7], 35);
