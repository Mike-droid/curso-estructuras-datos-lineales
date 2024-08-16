class DoublyLinkedListNode {
	key: number;
	value: number;
	prev: DoublyLinkedListNode | null;
	next: DoublyLinkedListNode | null;

	constructor(key: number, value: number) {
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class LRUCache {
	private capacity: number;
	private cache: Map<number, DoublyLinkedListNode>;
	private head: DoublyLinkedListNode;
	private tail: DoublyLinkedListNode;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.cache = new Map();
		this.head = new DoublyLinkedListNode(0, 0);
		this.tail = new DoublyLinkedListNode(0, 0);
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	get(key: number): number {
		if (!this.cache.has(key)) {
			return -1;
		}

		const node = this.cache.get(key)!;
		this.removeNode(node);
		this.addToFront(node);
		return node.value;
	}

	put(key: number, value: number): void {
		if (this.cache.has(key)) {
			const node = this.cache.get(key)!;
			this.removeNode(node);
			node.value = value;
			this.addToFront(node);
		} else {
			if (this.cache.size >= this.capacity) {
				const leastUsed = this.tail.prev!;
				this.removeNode(leastUsed);
				this.cache.delete(leastUsed.key);
			}
			const newNode = new DoublyLinkedListNode(key, value);
			this.addToFront(newNode);
			this.cache.set(key, newNode);
		}
	}

	private removeNode(node: DoublyLinkedListNode): void {
		const prevNode = node.prev!;
		const nextNode = node.next!;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
	}

	private addToFront(node: DoublyLinkedListNode): void {
		node.prev = this.head;
		node.next = this.head.next;
		this.head.next!.prev = node;
		this.head.next = node;
	}
}
