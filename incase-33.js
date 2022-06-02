var longestPalindrome = function (s) {
	if (s.length === 1) {
		return s;
	}
	// let pal = '';
	// let map = {}
	const herlperFunc = (s, i, j) => {
		if (!s.length || i > j) {
			return 0;
		}
		while (i >= 0 && j < s.length && s[i] === s[j]) {
			i--;
			j++;
		}
		return j - i - 1;
	};
	let start = 0;
	let end = 0;
	for (let i = 0; i < s.length; i++) {
		let len1 = herlperFunc(s, i, i);
		let len2 = herlperFunc(s, i, i + 1);
		let len = Math.max(len1, len2);
		if (len > end - start) {
			start = i - Math.floor((len - 1) / 2);
			end = i + Math.floor(len / 2);
		}
		// for(let j = i; j<s.length; j++){
		//   let comp = s.slice(i,j+1);
		//   if(!map[comp]){
		//     map[comp] = comp;
		//   }
		// }
	}
	return s.slice(start, end + 1);
	// for(let key in map){
	//   if(map[key].split('').reverse().join('') === map[key] && map[key].length>pal.length){
	//     pal = map[key];
	//   }
	// }
	// return pal
};
//longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");
//'ranynar'

var merge = function (nums1, m, nums2, n) {
	let i = 0;
	let j = 0;

	while (i < nums1.length && nums2.length > 0) {
		if (nums1[i] === 0 && i >= m && i < m + n) {
			nums1[i] = nums2.splice(j, 1)[0];
			i++;
		} else if (nums1[i] < nums2[j]) {
			i++;
		} else {
			let n = nums2.splice(j, 1)[0];
			nums1.splice(i, 0, n);
			i++;
		}
	}
	let h = n + m;
	let deff = nums1.length - h;
	nums1.splice(h);
	return nums1.sort((a, b) => a - b);
};

// merge([1,2,3,0,0,0],3,[2,5,6],3);
// merge([2,0],1,[1],1)
// merge([-1,0,0,0,3,0,0,0,0,0,0],5,[-1,-1,0,0,1,2],6)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     if(!target || !nums.length){
//       return [-1,-1]
//     }
//     // if(Math.abs(target) > 10**9 ){
//     //   return [-1, -1]
//     // }
//     let start = 0;
//     let mid = Math.floor(nums.length/2);
//     let end = nums.length-1;
//     while(start<=end){
//       console.log(start,end)
//       // if(Math.abs(nums[mid])>10*9){
//       //   return [-1, -1]
//       // }
//       if(nums[mid]<target){
//         start = mid+1;
//         mid = Math.floor((start+mid)/2);
//       }else if(nums[mid]>target){
//         end = mid-1;
//         mid = Math.floor(end/2);

//       }else{
//           let count = mid;
//           while(nums[count]===target){
//             count++;
//           }
//           if(mid !== count-1){
//             return [mid, count-1]
//           }
//       }

//     }
//     return [-1, -1]
// };

var searchRange = function (nums, target) {
	if (!target || !nums.length) {
		return [-1, -1];
	}
	// if(Math.abs(target) > 10**9 ){
	//   return [-1, -1]
	// }
	let start = 0;
	let mid = Math.floor((nums.length - 1) / 2);
	let end = nums.length - 1;
	while (start < end && mid <= end) {
		// console.log(start,end)
		// if(Math.abs(nums[mid])>10*9){
		//   return [-1, -1]
		// }
		if (nums[mid] < target) {
			console.log(start, end);
			start = mid + 1;
			mid = Math.floor((start + mid) / 2);
		} else if (nums[mid] > target) {
			end = mid - 1;
			mid = Math.floor(end / 2);
		} else {
			let count = mid;
			console.log(mid, count);
			while (nums[count + 1] === target) {
				count++;
			}
			return [mid, count];
		}
		console.log(mid, end);
	}
	return [-1, -1];
};
// searchRange([5,7,7,8,8,10],8);

// const generateSubset = (i,nums,list=[],subsets)=>{
//   subset.push
// }
// function subset(nums) {
//   let subsets = []
//   generateSubset(0,nums, list=[],subsets)
// }

function subset(nums) {
	let map = {};
	let subsets = [[]];
	for (let i = 0; i < nums.length; i++) {
		let j = 0;
		if (!map[nums[i]]) {
			subsets.push([nums[i]]);
			map[nums[i]] = nums[i];
		}

		while (j < nums.length) {
			let arr = [];
			if (subsets[j]) {
				arr.push(...subsets[j]);
			} else if (j === nums.length - 1) {
				console.log(subsets[nums.length - 1]);
				arr.push(subsets[nums.length - 1]);
			}

			arr.push(nums[j]);

			let key = arr.sort((a, b) => a - b, 0);
			if (!map[key]) {
				map[key] = arr;
				subsets.push(arr);
			}
			j++;
			if (i >= nums.length - 1) {
				for (let i = 0; i < arr.length; i++) {
					let count = i + 1;
					while (count < arr.length) {
						let arr1 = [arr[i], arr[count]];
						let slice = arr1.slice(i, count);
						let key = [...arr1];
						key.sort((a, b) => a - b);
						if (!map[key]) {
							map[key] = arr1;
							subsets.push(arr1);
						}
						let newSlice = [...slice];
						newSlice.sort((a, b) => a - b);
						if (!map[newSlice]) {
							map[newSlice] = slice;
							subsets.push(slice);
						}
						count++;
					}
				}
			}
		}
	}
	console.log(subsets);
}

subset([3, 2, 4, 1]);
