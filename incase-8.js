class Node {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	helper(node, action) {
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			this.length++;
			return true;
		}
		if (this.head === this.tail) {
			if (action === "prep") {
				node.next = this.head;
				this.head = node;
			} else {
				this.tail.next = node;
				this.tail = node;
			}

			this.length++;
			return true;
		}
		return false;
	}
	prepand(val) {
		let newNode = {
			val: val,
			next: null,
		};
		if (this.helper(newNode, "prep")) return this;

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	append(val) {
		let newNode = {
			val: val,
			next: null,
		};
		if (this.helper(newNode, "app")) return this;
		this.tail.next = newNode;
		this.tail = this.tail.next;
		this.length++;
		return this;
	}
}
let node = new Node();
