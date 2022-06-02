class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

let arr = [];
for (let i = 1; i < 10; i++) {
	arr.push(i);
}

class Tree {
	constructor() {
		this.root = null;
	}
	add(val) {
		if (this.root === null) {
			let newNode = new Node(val);
			this.root = newNode;
			return this;
		}
		let node = this.root;
		let stack = [node];
		while (stack.length > 0) {
			let current = stack.shift();
			if (current.left) {
				stack.push(current.left);
			} else {
				current.left = new Node(val);
				return this.root;
			}
			if (current.right) {
				stack.push(current.right);
			} else {
				current.right = new Node(val);
				return this.root;
			}
		}
	}
	addRight(val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this.root;
		}
		let stack = [this.root];
		while (stack.length > 0) {
			let current = stack.pop();
			if (current.right === null) {
				current.right = newNode;
				return this.root;
			}
			if (current.right !== null) {
				stack.push(current.right);
			}
		}
	}
}

function buildBalacedTree(arr) {
	let node = new Tree();
	for (let i = 0; i < arr.length; i++) {
		node.add(arr[i]);
	}
	return node;
}
function buildUnbalacedTree(arr, node) {
	// let node = new Tree();
	for (let i = 0; i < arr.length; i++) {
		node.addRight(arr[i]);
	}
	return node;
}

// let unbalacedTree = buildUnbalacedTree(arr);
let balacedTree = buildBalacedTree(arr);

function pathFinder(root, targe) {
	if (root === null) return null;
	if (root.val === targe) return [root.val];
	let leftPath = pathFinder(root.left, targe);
	let righPath = pathFinder(root.right, targe);

	if (leftPath !== null) {
		leftPath.push(root.val);
		return leftPath;
		// return [root.val,...leftPath]
	}
	if (righPath !== null) {
		righPath.push(root.val);
		return righPath;
		// return [root.val, ...righPath]
	}
	return null;
}
const howHigh = (node) => {
	if (node === null) return -1;
	let val = node !== null ? 1 : -1;
	let leftVal = howHigh(node.left);
	let rightVal = howHigh(node.right);
	return val + Math.max(leftVal, rightVal);
};

const bottomRightValue = (root) => {
	// todo
	if (root === null) return null;
	let queu = [root];
	while (queu.length > 0) {
		let current = queu.pop();
		if (current && current.right) {
			queu.push(current.right);
		}
		if (current && current.left) {
			queu.push(current.left);
		}

		if (queu.length === 0) {
			return current.val;
		}
	}
};
let newArr = [11, 12, 13, 14, 15, 16, 17];
let unFromArr = buildUnbalacedTree(newArr, balacedTree);
//                        1
//.                     /   \
//.                    2     3
//.                   / \.  / \
//.                  4   5 6   7
//.                 / \
//.                8   9

const treeLevels = (root) => {
	// todo
	if (root === null) return [];
	let outPut = [];
	let stack = [{ node: root, level: 0 }];
	while (stack.length > 0) {
		let { node, level } = stack.pop();
		if (!outPut[level]) {
			outPut[level] = [];
		}
		if (node.val) {
			outPut[level].push(node.val);
		}

		let lev = level + 1;
		if (node.right !== null) {
			let nod = { node: node.right, level: lev };
			stack.push(nod);
		}
		if (node.left !== null) {
			let nod = { node: node.left, level: lev };
			stack.push(nod);
		}
	}
	return outPut;
};

let leftView = [];
let rightView = [];
let arrLeftView = treeLevels(unFromArr.root);
for (let i = 0; i < arrLeftView.length; i++) {
	let val = arrLeftView[i][0];
	leftView.push(val);
}
for (let i = 0; i < arrLeftView.length; i++) {
	let val = arrLeftView[i][arrLeftView[i].length - 1];
	rightView.push(val);
}
