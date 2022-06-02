const generateNums = (n) => {
	let arr = [];
	let j = 1;
	while (j <= n) {
		arr.push(j);
		j++;
	}
	return arr;
};
const createComb = (arr) => {
	if (arr.length === 0) return [[]];
	let [a, ...b] = arr;
	let arrExclud = createComb(b);
	let combinations = [];
	for (let subs of arrExclud) {
		combinations.push([a, ...subs]);
	}
	return [...arrExclud, ...combinations];
};
var combine = function (n, k) {
	let arr = generateNums(n);
	console.log(arr);
	return createComb(arr);
};
// combine(20,16)

// const clonGraph = (graph,cloneGraph,visited)=>{

//   for(let key in graph){
//     if(visited.has(+key)){
//       return false;
//     }
//     visited.add(+key);
//     cloneGraph[key] = [...graph[key]];
//     for(let val of cloneGraph[key]){
//       if(clonGraph(graph,cloneGraph,visited)){
//         return true;
//       }
//     }
//   }
//   return cloneGraph;
// }
// var cloneGraph = function(node) {
//     let clone = {}
//     let visited = new Set()
//     return clonGraph(node,clone,visited);
// };
// let map = {val:1,neighbor:[2,4],node:{val:2,neighbor:[1,3]},node:{val:3,neighbor:[2,4]},node:{val:4,neighbor:[1,3]}};
// cloneGraph([[2,4],[1,3],[2,4],[1,3]])

// class Node {
//   constructor(arr) {
//     if(arr.length === 0){
//       return;
//     }
//     let val = arr.pop()
//     this.val=1||val;
//     this.neighbor = [new Node(10)]

//   }
// }

// const clonGraph = (graph,cloneGraph,visited,queue)=>{
//   let val = queue.shift();
//   if(visited.has(val)){
//     return false;
//   }
//   let node = {val:val};
//   node.neighbors = [];
//   visited.add(val);
//   for(let current of graph.neighbors){
//     queue.push(current.val);
//     let newNode = {val:current.val};
//     node.neighbors.push(newNode);
//   }
//   cloneGraph.val = node;
//   if(clonGraph(graph,cloneGraph,visited,queue)){
//     return true;
//   }
// }
// var cloneGraph = function(node) {
//     return clonGraph(node,{val:node.val},new Set(),[])
// };

// const clonGraph = (node)=>{
//   let map = {};
//   const dfs = (node)=>{
//     if(node in map){
//       return map[node]
//     }
//     let copy = new Node(node.val);
//     map[node] = copy;

//   }
// }

var deleteDuplicates = function (arr) {
	let i = 0;
	let prevVal;
	while (i < arr.length) {
		if (prevVal === arr[i]) {
			arr.splice(i, 1);
		} else if (arr[i] === arr[i + 1]) {
			prevVal = arr[i];
			arr.splice(i, i + 2);
		} else {
			i++;
		}
	}
	return arr;
};

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let a = new Node(1),
	b = new Node(2),
	c = new Node(3),
	d = new Node(3),
	e = new Node(4),
	f = new Node(4),
	g = new Node(5);
(a.next = b),
	(b.next = c),
	(c.next = d),
	(d.next = e),
	(e.next = f),
	(f.next = g);

let arr = [1, 2, 3, 3, 4, 4, 5];
deleteDuplicates(arr);
console.log(a);
