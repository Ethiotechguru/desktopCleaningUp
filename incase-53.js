const buildSubSetRemoveDup = (nums, set) => {
	if (nums.length === 0) return [[]];
	let [a, ...b] = nums;
	let subsWithOutFirst = buildSubSetRemoveDup(b, set);
	let subsWithFirst = [];
	for (let ele of subsWithOutFirst) {
		let val = [a, ...ele];
		let key = val.sort((a, b) => a - b).join("");
		if (!set[key]) {
			subsWithFirst.push(val);
			set[key] = true;
		}
	}
	return [...subsWithOutFirst, ...subsWithFirst];
};
const findOne = (arr, sums) => {
	let compArr = [...sums];
	for (let sub of arr) {
		let val = sub.reduce((a, b) => a + b, 0);
		let idx = compArr.indexOf(val);
		if (idx === -1) {
			break;
		}
		compArr.splice(idx, 1);
		if (compArr.length === 0) {
			return sub;
		}
	}
};
var recoverArray = function (n, sums) {
	let filteredArr = buildSubSetRemoveDup(sums, {}).filter(
		(ele) => ele.length === n
	);
	for (let ele of filteredArr) {
		let myArr = buildSubSetRemoveDup(ele, {});
		let val = findOne(myArr, sums);
		if (val) return val;
	}
};
let wow = [
	1084, 1269, -117, 1201, 155, 204, -49, 0, -166, 997, -234, 272, 1152, 389,
	1435, 321, 38, 555, 1035, 831, 880, -400, -283, 714, 1318, 918, 597, 646,
	117, 480, 438, 763,
];
recoverArray(5, wow);
