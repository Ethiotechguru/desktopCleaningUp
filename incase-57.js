let arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const trappingRainWarer = (height) => {
	let total = 0;
	let leftP = 0;
	let rightP = height.length - 1;
	let maxLeft = 0;
	let maxRight = 0;
	// let currentVal = 0;
	while (leftP < rightP) {
		if (height[leftP] <= height[rightP]) {
			if (height[leftP] > maxLeft) {
				maxLeft = height[leftP];
			}
			total += Math.max(0, maxLeft - height[leftP]);
			leftP++;
		} else {
			if (height[rightP] > maxRight) {
				maxRight = height[rightP];
			}
			total += Math.max(0, maxRight - height[rightP]);
			rightP--;
		}

		// if(currentVal>0){
		//     total = total+currentVal;
		// }
	}
	return total;
};
// trappingRainWarer([0,1,0,2,1,0,1,3,2,1,2,1]);
trappingRainWarer([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
