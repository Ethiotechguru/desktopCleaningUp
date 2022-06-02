const buildComb = (nums) => {
	if (nums.length === 0) return [[]];
	let [a, ...b] = nums;
	let rest = buildComb(b);
	let subset = [];
	for (let sub of rest) {
		subset.push([a, ...sub]);
	}
	return [...rest, ...subset];
};
const getCombSubToTarget = (subset, target, output) => {
	for (let subs of subset) {
		let n = subs.reduce((a, b) => a + b, 0);
		if (n === target) {
			output.push(subs);
		}
	}
	return output;
};
var combinationSum = function (candidates, target) {
	let combs = buildComb(candidates);
	return getCombSubToTarget(combs, target, []);
};

// combinationSum([2,3,6,7],7)

var checkInclusion = function (s1, s2) {
	let str2 = s2.split("");
	let str1 = s1.split("").sort().join("");
	for (let i = 0; i < s2.length; i++) {
		let j = i + s1.length;
		let perm = str2.slice(i, j);
		let p = perm.sort().join("");
		if (p == str1) return true;
	}
	return false;
};
checkInclusion("ab", "eidbaooo");
