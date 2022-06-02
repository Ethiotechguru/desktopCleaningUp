class Node {
	constructor(val) {
		this.val = val;
	}
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// e.next = null;
// f.next = null;

function reverseList(node) {
	let stack = [node];
	let stack2 = [];
	while (stack.length > 0) {
		let current = stack.pop();
		stack2.push(current.val);
		if (current.next) {
			stack.push(current.next);
		}
	}
	let i = stack2.length - 1;
	let stack3 = [node];
	while (i >= 0) {
		let current = stack3.pop();
		current.val = stack2[i];
		if (current.next) {
			stack3.push(current.next);
		}
		i--;
	}
}
// reverseList(a)

var isSameTree = function (p, q) {
	let stackq = [q];
	let stackp = [p];
	if (!q || !p) {
		return false;
	}
	if (stackp.val !== stackq.val) {
		return false;
	}
	while (stackp.length > 0 && stackq.length > 0) {
		let nodep = stackp.pop();
		let nodeq = stackq.pop();
		if (nodep.val !== nodeq.val) {
			return false;
		}
		if (!nodep.left && nodeq.left) return false;
		if (nodep.left && !nodeq.left) return false;
		if (!nodep.right && nodeq.right) return false;
		if (nodep.right && !nodeq.right) return false;
		if (nodep.left && nodeq.left) {
			stackq.push(nodeq.left);
			stackp.push(nodep.left);
		}
		if (nodep.right && nodeq.right) {
			stackq.push(nodeq.right);
			stackp.push(nodep.right);
		}
	}
	if (stackq.length === 0 && stackp.length === 0) {
		return true;
	}
	return false;
};
// isSameTree([],[])//
// reverseList(a)

var reverseBetween = function (head, left, right) {
	let stack = [head];
	let arr = [];

	while (stack.length > 0) {
		let current = stack.pop();
		if (current) {
			arr.push(current.val);
			if (current.next !== null) {
				stack.push(current.next);
			}
		}
	}

	let i = 1;
	let node = head;
	while (i !== left) {
		if (node.next) {
			node = node.next;
		}
		i++;
	}
	console.log(arr);
	let newArr = arr.splice(left - 1, right);
	// console.log(right)
	let j = newArr.length - 1;
	console.log(newArr);
	while (j >= 0) {
		node.val = newArr[j];
		node = node.next;
		j--;
	}
	return head;
};
reverseBetween(a, 2, 4);
