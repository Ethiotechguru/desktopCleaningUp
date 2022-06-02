const uncompress = (s) => {
	// todo
	let i = 0;
	let index = i;
	let map = [];
	let uncompresedValue = "";
	while (i < s.length) {
		let index = i;
		while (!isNaN(s[index])) {
			index++;
		}
		let num = s.slice(i, index);
		let currentStr = s[index];
		let idx = 0;
		while (idx < +num) {
			uncompresedValue += currentStr;
			idx++;
		}
		i = index + 1;
	}
	return uncompresedValue;
};
let str = "127y";
let val = uncompress(str);
