const compress = (s) => {
	// todo
	if (s.length === 1) return s;
	let i = 0;
	let j = 0;
	let result = [];
	while (i < s.length) {
		if (s[i] === s[j]) {
			j++;
		} else {
			let str = s.slice(i, j);
			let len = str.length;
			if (len > 1) {
				result.push(len, str[0]);
			} else {
				result.push(str);
			}
			i = j;
		}
	}
	return result.join("");
};
compress(
	"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
);
