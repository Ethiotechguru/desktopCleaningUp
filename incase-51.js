const stringPerm = (str) => {
	str = str.split("");
	let helperFunc = (str) => {
		if (str.length === 0) return [""];
		let fistStr = str[0];
		let second = str.slice(1);
		let rest = helperFunc(second);
		let comb = [];
		for (let j = 0; j < rest.length; j++) {
			let val = rest[j];
			for (let i = 0; i <= val.length; i++) {
				comb.push(val.slice(0, i) + fistStr + val.slice(i));
			}
		}
		return comb;
	};
	return helperFunc(str);
};

let perm = stringPerm("samuel");
let arr = [];
let map = {};
for (let str of perm) {
	if (!map[str]) {
		map[str] = true;
		arr.push(str);
	}
}
