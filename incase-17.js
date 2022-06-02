let edge = [
	["i", "j"],
	["i", "k"],
	["k", "m"],
	["j", "m"],
	["m", "n"],
	["o", "n"],
	["p", "q"],
	["r"],
];
let newOne = [
	[2, 4],
	[1, 3],
	[2, 4],
	[1, 3],
];
function buildAdjecencyList(edges) {
	let map = {};
	for (let edge of edges) {
		const [a, b] = edge;
		if (!map[a]) {
			map[a] = [];
		}
		if (!map[b]) {
			map[b] = [];
		}
		if (b) map[a].push(b);
		if (a) map[b].push(a);
	}
	return map;
}
//{i:[j,k],j:[i,m], k:[i,m], m:[k,j,n],n:[m,o],o:[n],p:[q],q:[p]};
let adjecencyList = buildAdjecencyList(edge);
let newTwo = buildAdjecencyList(newOne);
function hasPath(adjList, src, des, visited) {
	// let count = 0;
	if (!adjList[src]) {
		return false;
	}
	function checkPath(src, des) {
		console.log(src);
		if (src === des) {
			return true;
		}

		if (visited.has(src)) {
			return false;
		}
		visited.add(src);
		// console.log(count)
		for (let neighbor of adjList[src]) {
			if (checkPath(neighbor, des) === true) {
				// console.log(count)
				return true;
			}
		}
		return false;
	}

	let val = checkPath(src, des);
	return val;
}
function countConnectedGraph(adjL, visited, count) {
	function checkPath(src) {
		if (visited.has(src)) {
			return false;
		}
		visited.add(src);
		for (let neighbor of src) {
			checkPath(neighbor);
		}
	}
	for (let key in adjL) {
		checkPath(key, 0);
	}
	return count;
}
countConnectedGraph(adjecencyList, new Set(), 0);
