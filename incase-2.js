function comb(arr) {
	if (arr.length === 0) return [[]];
	let [a, ...b] = arr;
	let rest = comb(b);
	let combinations = [];
	for (let sub of rest) {
		combinations.push([a, ...sub]);
	}
	return [...rest, ...combinations];
}
// comb([1,2,3])
const createPerm = (perm, a, permsWithA) => {
	for (let i = 0; i <= perm.length; i++) {
		permsWithA.push([...perm.slice(0, i), a, ...perm.slice(i)]);
	}
};
const createComb = (sub, a, combinations) => {
	combinations.push([a, ...sub]);
};
function permutaion(arr, cb) {
	if (arr.length === 0) return [[]];
	let [a, ...b] = arr;
	let permsWithOutA = permutaion(b);
	let permsWithA = [];
	for (let perm of permsWithOutA) {
		createPerm(perm, a, permsWithA);
	}
	return permsWithA;
}

permutaion([1, 2, 3]);
