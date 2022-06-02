const graph = {
	a: ["b", "c"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};

const dfsIterativ = (graph, sorce) => {
	let stack = [sorce];
	while (stack.length > 0) {
		let current = stack.pop();
		console.log(current);
		if (graph[current]) {
			for (let neighbor of graph[current]) {
				stack.push(neighbor);
			}
		}
	}
};
dfsIterativ(graph, "a");

const dfsRecursive = (graph, sorce) => {
	console.log(sorce);
	for (let neighbor of graph[sorce]) {
		dfsRecursive(graph, neighbor);
	}
};
dfsRecursive(graph, "a");

const helperFunc = (graph, stack) => {
	let current = stack.shift();
	console.log(current);
	if (graph[current]) {
		for (let neighbor of graph[current]) {
			stack.push(neighbor);
		}
	}
};
const bfs = (graph, sorce) => {
	let stack = [sorce];
	while (stack.length > 0) {
		helperFunc(graph, stack);
	}
};
bfs(graph, "a");
