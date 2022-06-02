var findGCD = function (nums) {
	let max = Math.max(...nums);
	let min = Math.min(...nums);

	let maxFac = new Set();
	let minFact = new Set();
	let arr = [];
	let i = 1;
	while (i <= max) {
		if (max % i === 0) {
			maxFac.add(i);
		}
		i++;
	}
	let j = 1;
	while (j <= min) {
		if (min % j === 0) {
			minFact.add(j);
		}
		j++;
	}
	maxFac.forEach((ele) => {
		if (minFact.has(ele)) {
			arr.push(ele);
		}
	});

	let myMax = Math.max(...arr);
	return myMax;
};

findGCD([2, 5, 6, 9, 10]);
