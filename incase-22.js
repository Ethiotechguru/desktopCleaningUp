let helperFunc = (candidates, map, target) => {
	if (candidates.length === 0) return [[]];
	let a = candidates[0];
	let b = candidates.slice(1);
	while (a > target) {
		a = b[0];
		b = b.slice(1);
	}
	let rest = helperFunc(b, map, target);

	let comb = [];
	for (let num of rest) {
		let val = [a, ...num].sort((a, b) => a - b);
		if (!map[val] && val.reduce((a, b) => a + b, 0) <= target) {
			map[val] = true;
			comb.push([a, ...num]);
		} else {
			comb.push([]);
		}
	}
	return [...rest, ...comb];
};
const sortAdRemove = (candidates, target) => {
	candidates.sort((a, b) => a - b);
	let i = 0;
	let j = 0;
	while (i < candidates.length) {
		if (candidates[i] === candidates[j]) {
			j++;
		} else {
			if (j - i > 1) {
				candidates.splice(i + 1, j - i - 1);
			}

			i++;
			if (candidates[i] > target) {
				candidates.splice(i);
			}
		}
	}
	return candidates;
};
var combinationSum2 = function (candidates, target) {
	if (candidates.reduce((a, b) => a + b, 0) < target) return [];
	candidates.sort((a, b) => a - b);
	candidates = sortAdRemove(candidates, target);
	let map = {};
	let output = helperFunc(candidates, map, target);
	return output.filter((ele) => ele.reduce((a, b) => a + b, 0) === target);
};

let arr = [
	14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32,
	8, 7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17,
	16, 8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12,
];
// combinationSum2(arr,27);
combinationSum2(arr, 27);
