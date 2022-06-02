var findAnagrams = function (s, p) {
	if (s.length < p.length) {
		return [];
	}
	let map = {};
	let arr = [];
	let len = p.length;
	// let i = 0;
	for (let char of p) {
		if (!map[char]) {
			map[char] = 1;
		} else {
			map[char]++;
		}
	}
	let i = 0;
	while (i <= s.length - p.length) {
		let hashMap = {};
		let sSlice = s.slice(i, i + p.length);
		for (let char of sSlice) {
			if (!hashMap[char]) {
				hashMap[char] = 1;
			} else {
				hashMap[char]++;
			}
		}
		console.log(hashMap);
		let signal = true;
		for (let key in hashMap) {
			if (!map[key]) {
				signal = false;
				break;
			}
			if (map[key] !== hashMap[key]) {
				signal = false;
				break;
			}
		}
		if (signal) {
			arr.push(i);
		}
		i++;
	}
	return arr;
};

findAnagrams("cbaebabacd", "abc");
