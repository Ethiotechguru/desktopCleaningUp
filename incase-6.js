// var maxProfit = function(prices) {
//     let max = Math.max(...prices);
//     let min = Math.min(...prices);
//     let maxProfit = 0;
//     let maxIndex = prices.indexOf(max);
//     let minIndex = prices.indexOf(min)
//     if(minIndex<maxIndex){
//       maxProfit = prices[maxIndex] - prices[minIndex]
//     }else{
//       let maxSide = prices.slice(0,maxIndex+1);
//       let minLeft = Math.min(...maxSide);
//       let leftProfit = max-minLeft;
//       let minSide = prices.slice(minIndex);
//       let maxRight = Math.max(...minSide);
//       let rightProfit = maxRight-min;
//       let profit = leftProfit>rightProfit?leftProfit:rightProfit;

//       return profit;
//     }
//   return maxProfit;
// };

var myAtoi = function (s) {
	let str = s.trim().split("");
	let sign;
	let nums = [];
	if (str[0] === "-") {
		sign = Math.sign(-1);
		str.splice(0, 1);
	} else if (str[0] === "+") {
		str.splice(0, 1);
	}
	let i = 0;
	while (!isNaN(str[i])) {
		nums.push(str[i]);
		i++;
	}
	let n = nums.join("");
	if (sign) {
		let num = sign * n < sign * 2 ** 31 ? sign * 2 ** 31 : sign * n;
		return num;
	}
	let val = +n > 2 ** 31 - 1 ? 2 ** 31 - 1 : +n;
	return val;
};
myAtoi("   +0 123");
