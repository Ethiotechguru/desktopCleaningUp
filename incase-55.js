var findSubstring = function (s, words) {
	let w = words.join("");
	let sortedWord = w.split("").sort().join("");
	let arr = [];
	let i = 0;
	let j = sortedWord.length;
	while (i < s.length) {
		let strToComper = s.slice(i, i + j);
		let clonStr = strToComper.split("").sort().join("");
		if (clonStr === sortedWord) {
			arr.push(i);
			i = i + words[0].length;
		} else {
			i++;
		}
	}
	return arr;
};

findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]);
//"barfoothefoobarman"
//["foo","bar"]

//"barfoofoobarthefoobarman"
//["bar","foo","the"]
