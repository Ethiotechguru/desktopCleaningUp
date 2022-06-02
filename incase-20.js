// function comb(arr) {
//     let results = []
//     let map ={}
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i+1; j<=arr.length; j++){
//             let iToJ = arr.slice(i,j);
//             let iVal = arr[i];
//             let jVal = arr[j];
//             let key = iToJ.join('');
//             let iAndj = [arr[i],arr[j]];
//             let andKey = iAndj.join('');
//             if(andKey && !map[andKey]){
//                 results.push(iAndj);
//                 map[andKey] = true;
//             }
//             if(!map[key] && key){
//                 results.push(iToJ);
//                 map[key] = true;
//             }
//             if(!map[iVal] && iVal){
//                 results.push([arr[i]]);
//                 map[iVal] = true;
//             }
//             if(!map[jVal] && jVal){
//                 results.push([arr[j]]);
//                 map[jVal] = true;
//             }
//         }
//     }
//     return [[],...results];
// }
function comb(arr) {
	if (arr.length === 0) return [[]];
	let [a, ...b] = arr;
	let rest = comb(b);
	console.log(rest);
	let subset = [];
	for (let ele of rest) {
		subset.push([a, ...ele]);
	}
	return [...rest, ...subset];
}

comb([1, 2, 3]);
