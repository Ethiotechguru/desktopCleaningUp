var searchRange = function (nums, target) {
	if (!target || !nums.length) {
		return [-1, -1];
	}
	if (nums.length === 1 && nums[0] === target) {
		return [0, 0];
	}
	if (nums[0] === nums[nums.lenght - 1]) {
		return [0, nums.length - 1];
	}
	let start = 0;
	let mid = Math.floor(nums.length / 2);
	let end = nums.length - 1;
	while (start <= end) {
		if (nums[mid] === target) {
			let i = mid;
			let j = mid;
			while (nums[i - 1] === target) {
				i--;
			}
			while (nums[j + 1] === target) {
				j++;
			}
			return [i, j];
		} else {
			if (nums[mid] < target) {
				start = mid + 1;
				mid = Math.floor((start + end) / 2);
			} else if (nums[mid] > target) {
				end = mid - 1;
				mid = Math.floor((start + end) / 2);
			}
		}
	}
	return [-1, -1];
};

// searchRange([5,7,7,8,8,10],8)

var rotate = function (nums, k) {
	let arr = nums.splice(0, nums.length - k);
	return [...nums, ...arr];
};
// rotate([1,2,3,4,5,6,7],3)

class Node {
	constructor() {
		this.head = null;
	}
	append(val) {
		let newNode = { val: val, next: null };
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return this;
		}
		if (this.head === this.tail) {
			this.head.next = newNode;
			this.tail = newNode;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		return this;
	}
	rotate() {
		let current = this.head;
		let temp;
		while (current.next) {
			temp = current;
			current = current.next;
		}
		current.next = this.head;
		this.head = current;
		temp.next = null;
		this.tail = temp;
		return this;
	}
}

let myNode = new Node();
