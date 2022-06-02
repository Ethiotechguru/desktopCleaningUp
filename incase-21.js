function combSum(k, n) {
	let arr = [];
	for (let i = 1; i < n; i++) {
		arr.push(i);
	}
	let results = [];
	for (let i = 0; i < arr.length; i++) {
		let mid = i + 1;
		let end = i + k;
		while (end < arr.length) {
			let newArr = [arr[i], ...arr.slice(mid, end)];
			// let sum = newArr.reduce((a,b)=>a+b,0);
			// if(sum === n){
			//     results.push(newArr);
			// }
			results.push(newArr);
			mid++;
			end++;
		}
	}
	return results;
}
// combSum(3,7);
function factorial(n) {
	let result = 1;
	while (n > 1) {
		result *= n;
		n--;
	}
	return result;
}
factorial(3);
