// function twoSum(nums, n){

// }

// twoSum([4,2,7,9,6,10],19);

// var subsets = function(nums) {
//     let map = {
//       '[]':[],
//     }
//     let i = 0;

//     while(i<nums.length){
//       let j =i+1;
//       let temp = [nums[i]];
//       if(!map[temp]){
//         map[temp] = [nums[i]]
//       }

//       while(j<nums.length){
//         let key = nums.slice(i,j+1);
//         key.sort((a,b)=>a-b)
//         if(!map[key]){
//           map[key] =  key
//         }
//         let temp2 = [nums[i],nums[j]];
//         if(!map[temp2]){
//           map[temp2] = temp2;
//         }
//         j++;
//       }
//       i++;
//     }
//   let number = [];
//   for(let key in map){
//     number.push(map[key])
//   }
//   return number;
// };
// // subsets([3,2,4,1])
// class Tree{
//   constructor(val){
//     this.val = val;
//     this.left=null;
//     this.right=null;
//   }
// }
// let newNode = new Tree(30);
// let b = new Tree(4)
// let c = new Tree(6);
// let d = new Tree(1)
// let e = new Tree(100);
// let f = new Tree(66)
// let g = new Tree(2)
// newNode.left = b;//6,2,5,
// newNode.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;
// // console.log(newNode)
// //                   3
// //.                /   \
// //                4     5
// //               / \   / \
// //              6   7 8   9

// // function appedToTree(node) {
// //    let stack = [node];
// //     let max = -Infinity;
// //     let results = [];
// //    while(stack.length>0){
// //        let node = stack.pop();
// //          if(node.val >max){
// //            max = node.val;
// //          }
// //         results.push(node.val)
// //      if(node.right){
// //         stack.push(node.right)
// //       }
// //      if(node.left){
// //        // console.log(node.left.val)
// //       stack.push(node.left);
// //      }

// //     }
// //  return max;
// // }
// // appedToTree(newNode);
// const helperFunc = (firstVal, secondVal, val)=>{
//   let min = val;
//   if(firstVal<secondVal){

//     if(firstVal<val){
//       min = firstVal;
//     }else{
//       min = val
//     }
//   }else if(firstVal>secondVal){
//     if(secondVal<val){
//       min = secondVal;
//     }else{
//       min = val;
//     }
//   }
//   return min;
// }

// // function appedToTree(node,target,results=[]) {
// //    if(!node){
// //      return -Infinity;
// //    }
// //   // if(node.val < Infinity){
// //   //   return node.val;
// //   // }
// //   let firstVal = appedToTree(node.left);
// //   let secondVal = appedToTree(node.right);
// //   return helperFunc(firstVal,secondVal,node.val)
// // }
// // appedToTree(newNode);

// const combSum=(nums, target)=>{
//   const root = {};
//   for(let i = 0; i<nums.length;i++){
//     if(!root[nums[i]]){
//       root[nums[i]] = {val:nums[i]}
//     }
//   }
//   let i = 0;

//   while(i<nums.length){
//     let j = 0;
//     while(j<nums.length){
//       root[nums[i]].next = [nums[i], nums[j]]
//       j++;
//     }
//     i++
//   }
//   return root;
// }
// // combSum([2,3,5])

// const sort = (a,b)=>{
//   let result = [];
//   while(a.length && b.length){
//     if(a[0]<b[0]){
//       result.push(...a.splice(0,1))
//     }else{
//       result.push(...b.splice(0,1))
//     }
//   }
//   return [...result, ...a, ...b]
// }
// const merge = (arr)=>{
//   if(arr.length === 1){
//     return arr;
//   }
//   let mid = Math.floor((arr.length)/2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return sort(merge(left),merge(right));
// }

// // merge([3,4,5,1,2]);

// var singleNumber = function(nums) {
//     let output = []

//     nums.sort((a,b)=>a-b);
//     for(let i = 0; i<nums.length; i+=2){
//       console.log(i, i+1)
//       if(nums[i]!==nums[i+1]){
//         output.push(nums[i])
//       }
//     }
//   if(nums[nums.length-1] !== nums[nums.length-2]){
//     output.push(nums[nums.length-1])
//   }
//   return output;
// };

// // singleNumber([1,2,1,3,2,5])

// const createTree = (nums,left, right)=>{
//   if(left>right) return null;
//   let midPoint = Math.floor((left+right)/2)
//   let node = new Tree(nums[midPoint]);
//   node.left = createTree(nums,left,midPoint-1)
//   node.right = createTree(nums,midPoint+1,right)
//   return node;
// }

// const tree = (nums)=>{
//   return createTree(nums,0,nums.length-1)
// }
// // tree([-10,-3,0,5,9]);

// function checke(s) {
//   if(s.trim()[0] !== '-' && isNaN(s.trim()[0])){
//       return 0;
//   }
//   return s.trim
// }

// checke('samule')\\

var myAtoi = function (s) {
	let edgeCase = s.trim()[0];
	if (edgeCase !== "-" && isNaN(edgeCase)) {
		if (edgeCase !== "+") {
			return 0;
		}
	} else if (edgeCase !== "+" && isNaN(edgeCase)) {
		if (edgeCase !== "-") {
			return 0;
		}
	}

	s = s.trim().split("");
	let numStr = "";
	let negativSign = "";
	let posetivSign = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "-") {
			negativSign = negativSign + s[i];
		} else if (s[i] === "+") {
			posetivSign = s[i];
		} else if (!isNaN(s[i])) {
			numStr = numStr + s[i];
		} else {
			break;
		}
	}
	if (!negativSign) {
		let n = +numStr;
		if (n > 2 ** 31 - 1) {
			return 2 ** 31 - 1;
		} else {
			return n;
		}
		return +numStr;
	} else {
		let n = +numStr * -1;
		if (n <= -1 * 2 ** 31) {
			return 2 ** 31 * -1;
		} else {
			return n;
		}
	}
};
// myAtoi("00000-42a1234");

var maxArea = function (height) {
	let maxWater = -Infinity;
	let left = 0;
	let right = height.length - 1;
	while (left < right) {
		let width = right - left;
		let minHieght = Math.min(height[left], height[right]);
		let val = minHieght * width;
		if (maxWater < val) {
			maxWater = val;
		}
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return maxWater;
};

class Node {
	constructor(val) {
		this.val = val;
		this.right = null;
		this.left = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(val) {
		if (!val) {
			return null;
		}
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let node = this.root;
		let stack = [node];

		while (stack.length > 0) {
			let current = stack.pop();
			if (current.val === val) return null;
			if (current !== null && current.val > val) {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				stack.push(current.left);
			} else if (current !== null && current.val < val) {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				stack.push(current.right);
			}
		}
	}
	getLeftVal() {
		let node = this.root.left;
		let stack = [node];
		let leftVal = [];
		while (stack.length > 0) {
			let current = stack.pop();
			leftVal.push(current.val);
			if (current.left) {
				stack.push(current.left);
			}
			if (current.right) {
				stack.push(current.right);
			}
		}
		return leftVal;
	}
	getRightVal() {
		let node = this.root.right;
		if (!node) {
			return null;
		}
		let stack = [node];
		let rightVal = [];
		while (stack.length > 0) {
			let current = stack.pop();
			rightVal.push(current.val);
			if (current.left) {
				stack.push(current.left);
			}
			if (current.right) {
				stack.push(current.right);
			}
		}
		return rightVal;
	}
	find(val) {
		let node = this.root;
		let stack = [node];
		let count = 0;
		while (stack.length) {
			let current = stack.pop();
			if (current !== null && current.val === val) {
				console.log(count);
				return current.val;
			}
			if (current !== null && val > current.val) {
				stack.push(current.right);
			} else if (current !== null && val < current.val) {
				stack.push(current.left);
			} else {
				return null;
			}
			count++;
		}
	}
}
let node = new BST();
node.insert(10);
node.insert(11);
node.insert(8);
node.insert(30);
node.insert(2);
node.insert(5);
node.insert(9);
node.insert(7);
node.insert(12);
node.insert(13);
node.insert(14);
node.insert(15);
node.insert(16);
node.insert(17);
node.insert(18);
