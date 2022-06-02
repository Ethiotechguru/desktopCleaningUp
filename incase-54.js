function subSet(elements) {
	if (elements.length === 0) return [[]];
	let firstElement = elements[0];
	let elementsWithOutFirst = subSet(elements.slice(1));
	let subSetsWithFirst = [];
	for (let subs of elementsWithOutFirst) {
		subSetsWithFirst.push([firstElement, ...subs]);
	}
	return [...elementsWithOutFirst, ...subSetsWithFirst];
}

// subSet([1,2,3,4])
function checkDup(nums, set) {
	if (nums.length === 0) return [[]];
	let [firstNum, ...b] = nums;
	let rest = checkDup(b, set);
	let eleWithFirst = [];
	for (let ele of rest) {
		let val = [firstNum, ...ele];
		let sortedVal = val.sort((a, b) => a - b);
		let key = sortedVal.join("");
		if (!set.has(key)) {
			set.add(key);
			eleWithFirst.push(val);
		}
	}
	return [...rest, ...eleWithFirst];
}
var subsetsWithDup = function (nums) {
	return checkDup(nums, new Set());
};

subsetsWithDup([1, 2, 3, 4]);
