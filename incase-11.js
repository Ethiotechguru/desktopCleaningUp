let wow = [
	1084, 1269, -117, 1201, 155, 204, -49, 0, -166, 997, -234, 272, 1152, 389,
	1435, 321, 38, 555, 1035, 831, 880, -400, -283, 714, 1318, 918, 597, 646,
	117, 480, 438, 763,
];
const removeDup = (nums, set) => {
	if (nums.length === 0) return [[]];
	let [a, ...b] = nums;
	let subsWithOutFirst = removeDup(b, set);
	let subsWithFirst = [];
	for (let ele of subsWithOutFirst) {
		let val = [a, ...ele];
		let key = val.sort((a, b) => a - b).join("");
		if (!set.has(key)) {
			subsWithFirst.push(val);
			set.add(key);
		}
	}
	let finalVal = [...subsWithOutFirst, ...subsWithFirst];
	// console.log(finalVal)
	return finalVal;
};

var recoverArray = function (n, sums) {
	return removeDup(sums, new Set()).filter((ele) => ele.length === n);
};

let myArr = recoverArray(5, wow);

let buildSubSet = (arr, sum) => {
	let all = [];
	for (let ele of arr) {
		let myArr = removeDup(ele, new Set());
		let arr = [...sum];
		for (let sub of myArr) {
			let val = sub.reduce((a, b) => a + b, 0);
			let idx = arr.indexOf(val);
			// console.log(arr[idx])
			if (idx === -1) {
				// console.log('unsatisfied')
				break;
			}
			arr.splice(idx, 1);
			if (arr.length === 0) {
				return sub;
			}
		}
	}
	return all;
};

// buildSubSet(myArr,[-3,-2,-1,0,0,1,2,3]);
buildSubSet(myArr, wow);

//5
//[1084,1269,-117,1201,155,204,-49,0,-166,997,-234,272,1152,389,1435,321,38,555,1035,831,880,-400,-283,714,1318,918,597,646,117,480,438,763]
