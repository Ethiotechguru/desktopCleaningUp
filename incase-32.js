const longestSequ = (arr) => {
	let obj = {};
	let count = 1;
	let num = [0];
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i];
		if (!map[key]) {
			map[key] = [arr[i], 1];
		}
	}

	let longer = 0;
	for (let key in obj) {
		if (obj[key].length > longer) {
			longer = obj[key];
		}
	}
	return longer;
};
//[4,2,2,7,7,7,7,7,3,3,2,2,2,2]

let count = 0;
const fib = (n) => {
	if (n === 1) {
		return 1;
	}
	// count++;
	return fib(n - 1) + fib(n - 2);
};
fib(20);
