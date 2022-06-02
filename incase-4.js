class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let a = new Node("a");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("E");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(a);

const printLinkeList = (head) => {
	if (head === null) return;
	console.log(head.val);
	printLinkeList(head.next);
};

printLinkeList(a);
