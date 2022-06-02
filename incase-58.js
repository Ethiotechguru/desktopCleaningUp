const trapRainWater = (arr) => {
	let total = 0;
	let left = 0;
	let right = arr.length - 1;
	let maxLeft = 0;
	let maxRight = 0;
	while (left < right) {
		if (arr[left] <= arr[right]) {
			if (arr[left] > maxLeft) {
				maxLeft = arr[left];
			}
			total += maxLeft - arr[left] > 0 ? maxLeft - arr[left] : 0;
			left++;
		} else {
			if (arr[right] > maxRight) {
				maxRight = arr[right];
			}
			total += maxRight - arr[right] > 0 ? maxRight - arr[right] : 0;
			right--;
		}
	}
	return total;
};

trapRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);
