// const helperFunc = (s) => {
//   let obj = {}
//   if(s[0] === '('){
//       let idx = s.indexOf(')');
//       obj.choices = s.slice(1,idx);
//       obj.remainder = s.slice(idx+1);
//   }else{
//       obj.choices = s[0];
//       obj.remainder = s.slice(1)
//   }
//   return obj;
// };

const parentheticalPossibilities = (s) => {
	if (s.length === 0) return [""];
	let choice;
	let remainder;
	if (s[0] === "(") {
		let idx = s.indexOf(")");
		choices = s.slice(1, idx);
		remainder = s.slice(idx + 1);
	} else {
		choices = s[0];
		remainder = s.slice(1);
	}
	let allRes = [];
	// const {choices,remainder} = helperFunc(s);
	for (let choice of choices) {
		let str = parentheticalPossibilities(remainder);
		for (let s of str) {
			allRes.push(choice + s);
		}
	}
	return allRes;
};
// parentheticalPossibilities("(qr)ab(stu)c") //[['',q,r],['ab',s,t,u],c]
const createComb = (nums) => {
	if (nums.length === 0) return [[]];
	let [a, ...b] = nums;
	let rest = createComb(b);
	let numsWithA = [];
	for (let num of rest) {
		if (num.length <= 4) {
			numsWithA.push([a, ...num]);
		}
	}
	return [...numsWithA, ...rest];
};
const fourSum = (arr) => {
	let outPut = [];
	for (let num of arr) {
		if (num.reduce((a, b) => a + b, 0) === 0) {
			outPut.push(num);
		}
	}
	return outPut;
};
// let fours = createComb([1,0,-1,0,-2,2]).filter(e=>e.length ===4);
// fourSum(fours)

// var fourSumTest = function(nums, target) {
//   let map = {};
//   let output =[]
//   nums.sort((a,b)=>a-b);;
//   for(let i = 0; i<nums.length-1;i++){
//     for(let j = i+1; j<nums.length; j++){
//       let key = nums[i]+nums[j];
//       if(!map[key]){
//         map[key] = [[i,j]]
//       }else{
//         map[key].push([i,j]);
//       }
//     }
//   }
//   let obj = {};
//   for(let i = 0; i<nums.length-1; i++){
//     for(let j = i+1; j<=nums.length-3;j++){
//       for(let k = j+1; k<=nums.length-2;k++){
//         let sum = nums[i]+nums[j];
//         let key = target-sum;
//         if(map[key]){
//           let arr = map[key]
//           for(let index = 0; index<arr.length; index++){
//             let p =arr[index][0];
//             let q = arr[index][1]
//             console.log(i,j,p,q)
//             if(i>j && j>p && p>q){
//               let myArr = [nums[p],nums[q],nums[i],nums[j]];
//               let val = [...myArr].sort((a,b)=>a-b);
//               if(!obj[val]){
//                 output.push([nums[p],nums[q],nums[i],nums[j]]);
//                 obj[val]=true;
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   return output;
// };
var fourSumTest = function (nums, target) {
	let map = {};
	let output = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i <= nums.length - 4; i++) {
		if (nums[i] === nums[i - 1]) continue;
		for (let j = i + 1; j <= nums.length - 3; j++) {
			let left = j + 1;
			let right = nums.length - 1;
			while (left < right) {
				let arr = [nums[i], nums[j], nums[left], nums[right]];
				let sum = arr.reduce((a, b) => a + b, 0);
				if (sum > target) {
					right--;
				} else if (target === sum) {
					let key = arr.sort((a, b) => a - b).join("");
					if (!map[key]) {
						output.push(arr);
						map[key] = true;
					}
					left++;
				} else {
					left++;
				}
			}
		}
	}
	return output;
};
// fourSumTest([2,2,2,2,2],8)

var findDisappearedNumbers = function (nums) {
	let len = nums.length;
	let numsSet = new Set(nums);
	let newArr = [];
	let n = 1;
	console.log(len);
	for (let i = 0; i < len; i++) {
		newArr.push(n);
		n++;
	}
	console.log(numsSet);
	let i = 0;
	while (i < newArr.length) {
		console.log(numsSet.has(newArr[i]));
		if (numsSet.has(newArr[i])) {
			newArr.splice(i, 1);
		} else {
			i++;
		}
	}
	return newArr;
};

findDisappearedNumbers([1, 1]);
