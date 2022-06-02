class Node {
	constructor() {
		this.root = null;
	}
	add(val) {
		if (this.root === null) {
			this.root = { val: val, left: null, right: null };
			return this.root;
		}
		let stack = [this.root];
		while (stack.length > 0) {
			let current = stack.shift();
			if (current.left == null) {
				current.left = { val: val, left: null, right: null };
				return this.root;
			}
			if (current.right === null) {
				current.right = { val: val, left: null, right: null };
				return this.root;
			}
			if (current.left) {
				stack.push(current.left);
			}
			if (current.right) {
				stack.push(current.right);
			}
		}
	}
}

// const depthFirstValues = (root) => {
//   // todo
//   if(root === null) return []
//   let arr = [];
//   let stack = [root];
//   while(stack.length>0){
//     let current = stack.pop();
//     if(current.val){
//       arr.push(current.val);
//     }

//     if(current.right){
//       stack.push(current.right)
//     }
//     if(current.left){
//       stack.push(current.left)
//     }
//   }
//   return arr;
// };

// const helperFucn = (root,stack,arr)=>{
//   console.log(arr)
//   if(stack.length === 0) return arr;
//   const current = stack.pop();
//   if(current && current.val) arr.push(current.val)
//   if(current.right !== null) stack.push(current.right);
//   if(current.left !== null) stack.push(current.left)
//   return helperFucn(root, stack,arr);
// }
// const depthFirstValues = (root) => {
//   // todo
//   if(root === null) return [];
//   let arr = [];
//   let stack = [root]
//   return helperFucn(root,stack,arr)
// };

const breadthFirstValues = (root) => {
	// todo
	if (root === null) return [];
	let queue = [root];
	let arr = [];
	while (queue.length > 0) {
		let current = queue.shift();
		if (current !== null) {
			arr.push(current.val);
		}

		if (current.left) {
			queue.push(current.left);
		}
		if (current.right) {
			queue.push(current.right);
		}
	}
	return arr;
};

let tree = new Node();
tree.add(10);
tree.add(8);
tree.add(7);
tree.add(6);
tree.add(5);
tree.add(4);
tree.add(3);

breadthFirstValues(tree.root);
