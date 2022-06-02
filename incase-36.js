const maxSubSum = (arr, size) => {
	let max = -Infinity;
	let maxSubArr;
	for (let i = 0; i <= arr.length - size; i++) {
		let subArr = arr.slice(i, i + size);
		let sum = subArr.reduce((a, b) => a + b, 0);
		if (max < sum) {
			max = sum;
			maxSubArr = subArr;
		}
	}
	return [max, maxSubArr];
};
maxSubSum([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3);

const smallestSubArrSum = (arr, target) => {
	let smallestSubArr;
	let i = 0;
	while (i < arr.length) {
		let j = i + 1;
		if (arr[i] >= target) {
			if (!smallestSubArr) {
				smallestSubArr = [arr[i]];
			} else {
				if (smallestSubArr.length > 1) {
					smallestSubArr = [arr[i]];
				} else {
					smallestSubArr =
						smallestSubArr[0] > arr[i] ? [arr[i]] : smallestSubArr;
				}
			}
			i++;
		} else {
			while (j < arr.length) {
				let newArr = arr.slice(i, j + 1);
				let sum = newArr.reduce((a, b) => a + b, 0);
				if (sum >= target) {
					if (!smallestSubArr) {
						smallestSubArr = newArr;
					} else if (
						smallestSubArr &&
						smallestSubArr.length >= newArr.length
					) {
						smallestSubArr = newArr;
					}
					break;
				}
				j++;
			}
			i++;
		}
	}

	return smallestSubArr;
};

smallestSubArrSum([4, 2, 2, 7, 1, 8, 2, 10], 7);
