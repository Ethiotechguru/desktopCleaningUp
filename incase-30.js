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
let q = new Node("q");
let h = new Node("q");
let f = new Node("f");
let g = new Node("g");
e.next = f;
f.next = g;

a.next = b;
b.next = c;
// c.next = h;
// h.next=e;

d.next = q;
// q.next = e;

var getIntersectionNode = function (headA, headB) {
	// corner case
	if (headA === null || headB === null) {
		return false;
	}

	let curA = headA;
	let curB = headB;

	while (curA !== curB) {
		curA = curA !== null ? curA.next : headB;
		curB = curB !== null ? curB.next : headA;
	}

	return curA;
};
// getIntersectionNode(a,d)
// var getIntersectionNode = function(headA, headB) {
//     let h1map = new Set();
//     // let h2map = {};
//     let h1 = headA;
//     while(h1 !== null){
//       h1map.add(h1);
//       h1 = h1.next;
//     }
//     let h2 = headB;
//     while(h2 !== null){
//       if(h2.val in h1map && h2 === h1map[h2.val]){

//           return h2.val;
//       }
//       h2 = h2.next;
//     }
//     console.log(h1map);
//     // console.log(h2map);

//     // for(let key in h1map){
//     //   if(h1map[key] === h2map[key]){
//     //     return h2map[key].val;
//     //   }
//     // }
//   return h1map;
// };

// let val = getIntersectionNode(a,d)

var reverseList = function (head) {
	let prev = null;
	let node = head;
	// console.log(node)
	while (node !== null) {
		let temp = node.next;
		node.next = prev;
		prev = node;
		node = temp;
	}
	return prev;
};
// reverseList(a)

var reverseWords = function (s) {
	let str = s.trim();
	let arrStr = str.split(" ");
	console.log(arrStr);
	let i = 0;
	while (i < arrStr.length) {
		if (arrStr[i] === "") {
			arrStr.splice(i, 1);
		} else {
			i++;
		}
	}
	// console.log(arrStr);
	let j = 0;
	let k = arrStr.length - 1;
	while (j < k) {
		let temp = arrStr[j];
		arrStr[j] = arrStr[k];
		arrStr[k] = temp;
		j++;
		k--;
	}
	return arrStr.join(" ").trim();
};
reverseWords("the sky is blue");
