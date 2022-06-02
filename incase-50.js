const strTypedOut = (s, i) => {
	s = s.split("");
	while (i < s.length) {
		if (s[i] === "#") {
			if (i - 1 >= 0) {
				s.splice(i - 1, 2);
				i = i - 1;
			} else {
				console.log(i - 1);
				s.splice(i, 1);
			}
		} else {
			i++;
		}
	}
	return s.join("");
};
function areEquale(s, p) {
	let sStr = strTypedOut(s, 0);
	let pStr = strTypedOut(p, 0);
	console.log(sStr, pStr);
	return sStr === pStr;
}

// areEquale('b####q#hr', 'y#z#b#c#m#r##hr');
// areEquale("xywrrmp","xywrrmu#p")

// function isNum(val) {
//    let n = Number(val);
//    return n === n;
// }
