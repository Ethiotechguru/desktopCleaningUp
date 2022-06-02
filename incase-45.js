class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
//[1,2,6,3,4,5,6]
let a = new Node(1);
let b = new Node(2);
let c = new Node(6);
let d = new Node(3);
let e = new Node(4);
let f = new Node(5);
let g = new Node(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var removeElements = function (head, val) {
	if (head === null) return null;
	let current = head;
	let prev = new Node("undifinde");
	let dummy = prev;
	while (current !== null) {
		if (current.val === val) {
			current = current.next;
			if (current === null) return dummy.next;
		} else {
			prev.next = current;
			current = current.next;
			prev = prev.next;
			prev.next = null;
		}
	}
	return dummy.next;
};

// removeElements(a,6);

const helperFunc = (n, set) => {
	if (+n === 1) return true;
	if (set.has(n)) return false;
	set.add(n);
	let sum = 0;
	for (let i = 0; i < n.length; i++) {
		sum = sum + (+n[i]) ** 2;
	}
	console.log(set);
	return helperFunc(sum.toString(), set);
};
var isHappy = function (n) {
	let num = n.toString();
	let set = new Set();
	return helperFunc(num, set);
};

isHappy(19);
