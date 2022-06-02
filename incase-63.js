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
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
let node = a;

// let g = new Node('g');
// let h = new Node('h');
// let i = new Node('i')
// let j= new Node('j');
// g.next=h;
// h.next = i;i.next = j;

// const zipperLists = (head1, head2) => {
//   // todo
//   let current1 = head1;
//   let current2 = head2;
//   let dummy = current1;
//   while(current1 !== null){
//     if(current2 !== null){
//       let temp = current1.next;
//       let temp2 = current2.next;
//       current1.next = current2;
//       current2.next = temp;
//       current1 = temp;
//       current2 = temp2;

//     }
//   }

//   if(current2 !== null){
//     let node = head1;
//     while(node.next !== null){
//       node = node.next;
//     }
//     node.next = current2;
//   }
//   return head1;
// };

// // zipperLists(g,a)

// let arr = [0,1,2,3,4,5,6,7,8,9,10];

// for(let num of arr){
//   if(num%2 === 0){
//     break;
//   }else{
//     console.log('heloo')
//   }
//   console.log(num)
// }
