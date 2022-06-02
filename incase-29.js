let graph = {
	f: ["i", "g"],
	i: ["g", "k"],
	g: ["h"],
	j: ["i"],
	h: [],
	k: [],
};

const bfsHasPathRecursive = (graph, source, des) => {
	if (source === des) {
		// console.log(des)
		return true;
	}
	for (let neigbor of graph[source]) {
		if (travelToNode(graph, neigbor, des)) {
			return true;
		}
	}
	return false;
};

bfsHasPathRecursive(graph, "f", "g");

const dfsInterativhasPath = (graph, source, des) => {
	let stack = [source];
	while (stack.length > 0) {
		let current = stack.pop();
		if (current === des) {
			return true;
		}
		for (let neigbor of graph[current]) {
			stack.push(neigbor);
		}
	}
	return false;
};

// dfsInterativhasPath(graph,'f','j')

const bfsHasPath = (graph, source, des) => {
	let stack = [source];
	while (stack.length > 0) {
		let current = stack.shift();
		if (current === des) {
			return true;
		}
		for (let neigbor of graph[current]) {
			stack.push(neigbor);
		}
	}
	return false;
};
bfsHasPath(graph, "f", "j");
