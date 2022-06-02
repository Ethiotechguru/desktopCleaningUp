function subStringSearch(str, substr) {
	// let i = 0;
	// while(i<str.length){
	//     let j = 0;
	//     while(j<substr.length){
	//         let s = str.slice(i, i+substr.length);
	//         console.log(s)
	//         if(s === substr){
	//             return i;
	//         }else{
	//             break;
	//         }
	//     }
	//     i++;
	// }
	// return -1;
	for (let i = 0; i < str.length; i++) {
		let s = str.slice(i, i + substr.length);
		if (s === substr) {
			return [i, s];
		}
	}
	return -1;
}

subStringSearch("samuelbelsolomonetebefekadu", "solomon");

// let str = new String('samule');
// let nam = 'samule';

const kmpStr = (str, substr) => {
	let tracker = new Array(str.length).fill(0);
	console.log(tracker);
};
// kmpStr('samuelbelsolomonetebefekadu','solomon');
