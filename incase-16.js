let edges = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "n"],
];
const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dest, visited) => {
	if (src === dest) {
		return true;
	}
	if (visited.has(src)) {
		return false;
	}
	visited.add(src);
	console.log(visited);
	for (let niebor of graph[src]) {
		if (hasPath(graph, niebor, dest, visited) === true) {
			return true;
		}
	}
	return false;
};

const buildGraph = (edges) => {
	const graph = {};

	for (let edge of edges) {
		const [a, b] = edge;
		if (!(a in graph)) {
			graph[a] = [];
		}
		if (!(b in graph)) {
			graph[b] = [];
		}
		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
};

// undirectedPath(edges,'i','q');
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3];
var topKFrequent = function (nums, k) {
	let map = {};
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (!map[nums[i]]) {
			map[nums[i]] = 1;
		} else {
			map[nums[i]]++;
		}
	}
	let newArr = Object.entries(map);
	console.log(newArr);
	newArr.sort((a, b) => b[1] - a[1]);
	let numbers = [];
	for (let i = 0; i < k; i++) {
		numbers.push(+newArr[i][0]);
	}
	return numbers;
};

// topKFrequent(arr,1)

let mult = 1;
function factorial(n) {
	while (n > 1) {
		mult *= n;
		n--;
	}
}
factorial(30);
