// const parentheticalPossibilities = (s) => {
//   // todo
//    if(s.length ===0)return [''];
//     let newArr = [];
//     for(let i = 0; i<s.length;i++){
//       let first = s[i];
//       let rest = s.slice(i+1);
//       let combWithOut = parentheticalPossibilities(rest);
//       let combWithFirst = [];
//       for(let comb of rest){
//         combWithFirst.push(first+comb)
//       }
//       newArr.push(combWithFirst)
//     }
//     return newArr;
// };
const parentheticalPossibilities = (s) => {
	// todo
	if (s.length === 0) return [""];
	let newArr = [];
	for (let i = 0; i < s.length; i++) {
		let first = s[i];
		let rest = s.slice(i + 1);
		let combWithOut = parentheticalPossibilities(rest);
		let combWithFirst = [];
		for (let comb of rest) {
			combWithFirst.push(first + comb);
		}
		return [...combWithFirst, ...combWithOut];
	}
	// return newArr;
};
parentheticalPossibilities("p(mn)qr(aei)");
