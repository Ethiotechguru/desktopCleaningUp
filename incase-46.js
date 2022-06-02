class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
let a = new Node(5),
	b = new Node(3),
	c = new Node(6),
	d = new Node(7),
	e = new Node(2);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const reverseList = (head) => {
	// todo
	let stack = [];
	let current = head;
	while (current !== null) {
		stack.push(current);
		current = current.next;
	}
	let dummyHead = stack.pop();
	let node = dummyHead;
	for (let i = stack.length - 1; i >= 0; i--) {
		dummyHead.next = stack[i];
		dummyHead = dummyHead.next;
	}
	dummyHead.next = null;
	return node;
};

// reverseList(a)
