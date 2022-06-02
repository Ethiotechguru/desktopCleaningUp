const mostFrequentChar = (s) => {
	// todo
	let s1 = s.split("").sort();
	console.log(s1);
	let str = s1[0];
	let maxCount = 0;
	let i = 0;
	let j = 0;
	while (i < s1.length) {
		if (s1[i] === s1[j]) {
			j++;
		} else {
			if (maxCount === j - i) {
				str = s.indexOf(str) < s.indexOf(s1[i]) ? str : s1[i];
			} else if (maxCount < j - i) {
				maxCount = j - i;
				str = s1[i];
			}
			i = j;
		}
	}
	return str;
};

const mostFrequentChar2 = (s) => {
	let map = {};
	for (let char of s) {
		if (!map[char]) {
			map[char] = 0;
		}
		map[char]++;
	}
	let max = 0;
	let str;
	for (let key in map) {
		if (max < map[key]) {
			max = map[key];
			str = key;
		}
	}
	return str;
};
mostFrequentChar2("vdaidvaie");
