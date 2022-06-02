let arr = [1, 3, 7, 9, 2];
let target = 11;

const twoSum = (arr, target) => {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		let n = target - arr[i];
		// if(map[n] || map[n] === 0){
		//     let val = [map[n],i]
		//     return val;
		// }
		map[arr[i]] = i;
	}
	for (let key in map) {
		let n = target - +key;
		if (map[n] || map[n] === 0) {
			return [map[key], map[n]];
		}
	}
};
// twoSum(arr,10);

const twoSum2 = (arr, target) => {
	let i = 0;
	let j = 1;
	while (i < arr.length) {
		let sum = arr[i] + arr[j];
		if (sum === target) {
			return [i, j];
		}
		j++;
		if (j >= arr.length) {
			i++;
			j = i + 1;
		}
	}
	return [];
};

twoSum2(arr, 10);
