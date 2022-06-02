class Node {
	constructor(val) {
		this.val = val;
	}
}
//[1,2,3,4,5]
// let a = new Node(3);
// a.next = new Node(5);
// a.next.next = null;
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
var reverseBetween = function (head, left, right) {
	let stack = [head];
	let arr = [];
	// if(left==1 && right == 2){
	//   let node = new Node(head.val);
	//   head = head.next;
	//   head.next = node
	//   node.next=null
	//   return head
	// }
	while (stack.length > 0) {
		let current = stack.pop();
		arr.push(current.val);
		if (current.next !== null) {
			stack.push(current.next);
		}
	}

	let i = 1;
	let node = head;
	while (i < left) {
		if (node.next) {
			node = node.next;
		}
		i++;
	}
	let newArr;
	if (right - left > 1) {
		newArr = arr.splice(left - 1, right - 1);
	} else if (right - left === 1) {
		newArr = arr.splice(left - 1, right);
	}

	let j = newArr.length - 1;
	while (j >= 0) {
		node.val = newArr[j];
		node = node.next;
		j--;
	}
	return head;
};
reverseBetween(a, 2, 5);
