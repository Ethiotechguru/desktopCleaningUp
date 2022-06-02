let edges = [
	["1", "2"],
	["2", "3"],
	["3", "4"],
	["1", "3"],
	["4", "2"],
	["5", "6"],
	["7"],
];

const createAdjList = (edges) => {
	let adList = {};
	for (let edge of edges) {
		let [a, b] = edge;
		if (a && !adList[a]) {
			adList[a] = [];
		}
		if (b && !adList[b]) {
			adList[b] = [];
		}
		if (adList[a] && b) {
			adList[a].push(b);
		}
		if (adList[b] && a) {
			adList[b].push(a);
		}
	}
	return adList;
};
let graph = createAdjList(edges);
const dfsTraversal = (graph, src, des, set) => {
	if (src === des) {
		return true;
	}

	if (set.has(src)) {
		return false;
	}
	set.add(src);
	console.log(set);
	for (let nieghbor of graph[src]) {
		if (dfsTraversal(graph, String(nieghbor), String(des), set)) {
			return true;
		}
	}
	return false;
};
const hasPath = (graph, src, des) => {
	return dfsTraversal(graph, String(src), String(des), new Set());
};

// hasPath(graph,4,5);

const countConnectedComponents = (graph) => {
	let count = 0;
	let visited = new Set();
	for (let key in graph) {
		if (explore(graph, key, visited) === true) {
			count++;
		}
	}
	return count;
};

const explore = (graph, node, set) => {
	if (set.has(node)) {
		return false;
	}
	set.add(node);
	for (let nieghbor of graph[node]) {
		explore(graph, nieghbor, set);
	}
	return true;
};
countConnectedComponents(graph);
