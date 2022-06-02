var calPoints = function (ops) {
	let recored = [];
	for (let i = 0; i < ops.length; i++) {
		if (!isNaN(+ops[i])) {
			recored.push(+ops[i]);
		} else if (ops[i] === "C") {
			if (recored.length > 0) {
				recored.splice(-1, 1);
			}
		} else if (ops[i] === "D") {
			if (recored.length > 0) {
				recored.push(2 * recored[recored.length - 1]);
			} else {
				recored.push(2);
			}
		} else {
			if (recored.length > 0) {
				recored.push(recored[recored.length - 1] + 5);
			} else {
				recored.push(5);
			}
		}
		console.log(recored);
	}

	return recored.reduce((a, b) => a + b, 0);
};

calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]);
