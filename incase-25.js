class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = b;

// const isCyclic = (head)=>{
//     let slow=head;
//     let fast=head;
//     let count = 0;
//     while(fast.next !== null){

//         if(slow===fast && count>0){
//             console.log(count)
//             console.log(slow);
//             console.log(fast);
//             return true;
//         }
//         slow = slow.next;
//         fast = fast.next.next;
//         if(!fast){
//             console.log(count)
//             return false;
//         }
//         count++;
//     }
//     // console.log(count)
//     return false;
// }
// isCyclic(a);
var detectCycle = function (head) {
	if (head === null) return null;
	if (head.next === null) return -1;
	let slow = head;
	let fast = head;
	while (fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (fast === slow) {
			break;
		}
	}
	if (fast.next === null) {
		return -1;
	}
	let p1 = head;
	while (p1 !== fast) {
		p1 = p1.next;
		fast = fast.next;
	}
	return p1;
};
detectCycle(a);
