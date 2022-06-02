let num = 143729; //1329
//"1432219"
const smallestNum = (num, k) => {
	let n = num.toString().split("");
	let i = 0;
	let stack = [n[i]];
	while (i < n.length) {
		if (n[i] > n[i + 1]) {
			if (k > 0) {
				n.splice(i, 1);
			} else {
				return n.join("");
			}
			k--;
		} else {
			i++;
		}
	}
	return (+n.join("")).toString();
};
// smallestNum(10,2)

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
	if (k >= num.length) {
		return "0";
	}
	num = num.split("");
	let i = 0;
	while (i < num.length) {
		if (num[i] > num[i + 1]) {
			num.splice(i, 1);
			k--;
			if (k === 0) {
				break;
			}
		} else {
			i++;
		}
	}
	if (k > 0) {
		let start = 0;
		let end = num.length - 1;
		while (k > 0) {
			if (num[start] > num[end]) {
				num.splice(start, 1);
			} else {
				num.splice(end, 1);
			}
			end = num.length - 1;
			k--;
		}
	}
	while (num[0] === "0" && num.length > 1) {
		num.splice(0, 1);
	}
	return num.join("");
};
removeKdigits("10", 1);
