var isMatch = function (s, p) {
	if (p === s) {
		return true;
	}
	let sStr = s.split("");
	let pStr = p.split("");
	let i = 0;
	let j = 0;
	while (sStr.length > 0 && pStr.length > 0) {
		if (sStr[i] === pStr[j]) {
			sStr.splice(i, 1);
			pStr.splice(j, 1);
		} else if (sStr[i] === "?" || pStr[j] === "?") {
			sStr.splice(i, 1);
			pStr.splice(j, 1);
		} else if (sStr[i] === "*" || pStr[j] === "*") {
			let len = sStr[i] === "*" ? sStr.length - 1 : pStr.length - 1;
			if (sStr[i] === "*") {
				pStr.splice(-len);
			} else {
				sStr.splice(-len);
			}
		}
	}
	if (sStr.length || pStr.length) {
		return false;
	}
	return true;
};
var increasingTriplet = function (nums) {
	let i = 0;
	let fNum = Infinity;
	let secNum = Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= fNum) {
			fNum = nums[i];
		} else if (nums[i] <= secNum) {
			secNum = nums[i];
		} else {
			console.log(fNum, secNum, nums[i]);
			return true;
		}
	}
	return false;
};
let nums = [20, 100, 10, 12, 5, 13];
increasingTriplet(nums);
