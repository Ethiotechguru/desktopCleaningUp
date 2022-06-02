class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// let a = new Node('a');
// let b = new Node('b');
// let c = new Node('c');
// let d = new Node('d');
// let e = new Node('e');
// let f = new Node('f');
let arr = ["a", "b", "c", , "d", "e", "f"];
// let arr = [];
// for(let i = 1; i<7000; i++){
//   arr.push(i);
// }
class Tree {
	constructor() {
		this.root = null;
	}
	addRight(val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let stack = [this.root];
		while (stack.length > 0) {
			let current = stack.pop();
			if (current.right === null) {
				current.right = newNode;
				return this;
			}
			if (current.right !== null) {
				stack.push(current.right);
			}
		}
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
				return this;
			}
			if (current.right) {
				stack.push(current.right);
			} else {
				current.right = new Node(val);
				return this;
			}
		}
	}
	travers() {
		let nodeCount = 1;
		let leftH = 0;
		let node = this.root;
		let stackLeft = [node];
		// let stackRigh = [node.right];
		let stack = [node];
		while (stackLeft.length > 0) {
			let current = stackLeft.pop();
			if (current.left) {
				stackLeft.push(current.left);
				console.log(current.left);
				leftH++;
			}
		}

		while (stack.length > 0) {
			let current = stack.pop();
			if (current.left) {
				stack.push(current.left);
				nodeCount++;
			}
			if (current.right) {
				stack.push(current.right);
				nodeCount++;
			}
		}
		let fullVal = 2 ** (leftH + 1) - 1;
		console.log(fullVal, nodeCount);
		return fullVal === nodeCount;
	}
}
// let tree = new Tree();

function buildTree(arr) {
	let node = new Tree();
	for (let i = 0; i < arr.length; i++) {
		node.add(arr[i]);
		// console.log(node)
	}
	return node;
}
// let tree = buildTree(arr);

//               a
//.             / \
//.            b   c
//.           / \ / \
//.          d  e f
//[5,4,6,null,null,3,7]
let node = new Tree();
node.add(5);
node.add(4);
// node.add(6);
node.add(-3);
// node.add(1)
// node.add(3);
// node.add(7);

// var isValidBST = function(root) {
//     if(!root){
//       return true;
//     }
//     let stack = [root];
//     while(stack.length>0){
//       let current = stack.pop();
//       if(current.left){
//         if((current.val && current.left.val) && current.val <= current.left.val){
//           return false;
//         }else{
//           stack.push(current.left)
//         }
//       }
//       if(current.right){
//         if((current.val && current.right.val) && current.val <= current.right.val){
//           return false;
//         }else{
//           stack.push(current.right)
//         }
//       }
//     }
//   return true;
// };
const treeMinValue = (root) => {
	// todo
	if (root === null) return null;
	const helperFunc = (root, min) => {
		// if(root)console.log(root.val)
		if (root === null) return min;
		if (root.val < min) {
			min = root.val;
		}
		let rightMin = helperFunc(root.right, min);
		let leftMin = helperFunc(root.left, min);
		return Math.min(rightMin, leftMin);
	};
	return helperFunc(root, Infinity);
};
// treeMinValue(node.root);//[5,6,7,3,4,-3,1]

let tree = buildTree(arr);

//.                     a
//.                   /   \
//.                  b     c
//.                 / \   / \
//.                d   e f

const pathFinder = (root, target) => {
	// todo
	if (root && root.val === target) return [root.val];
	if (root === null) return null;

	let leftPath = pathFinder(root.left, target);
	let rightPath = pathFinder(root.right, target);

	if (leftPath !== null) {
		return [root.val, ...leftPath];
	} else if (rightPath !== null) {
		return [root.val, ...rightPath];
	} else {
		return null;
	}
};
// pathFinder(tree.root,'f')

const helperFunc = (root, target, count) => {
	if (root === null) return 0;
	if (root && root.val === target) 1;
	let left = helperFunc(root && root.left, target, count);
	let right = helperFunc(root && root.right, target, count);
	count = count + left + right;
	return count;
	//  let leftCount = helperFunc(root.left,target,count);
	// let rightCount = helperFunc(root.right,target,count);
	//  if(leftCount){
	//    count++;
	//  }
	//  if(rightCount){
	//    count++;
	//  }
	// return count;
};

const treeValueCount = (root, target) => {
	// todo
	return helperFunc(root, target, 0);
};

// const treeValueCount = (root, target) => {
//   // todo
//   if(root === null) return 0;
//   let stack = [root];
//   let count = 0;
//   while(stack.length>0){
//     let current = stack.pop();
//     if(current && current.val === target){
//       count++;
//     }
//     if(current && current.left !== null){
//       stack.push(current.left)
//     }
//     if(current && current.right !== null){
//       stack.push(current.right)
//     }
//   }
//   return count;
// };

// treeValueCount(tree.root,'f');
