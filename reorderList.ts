import { ListNode } from "./ListNode";

function reorderList(head: ListNode | null): void {
	if (!head || !head.next) return;

	let slow: ListNode | null = head;
	let fast: ListNode | null = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next!;
		fast = fast.next.next;
	}

	let prev: ListNode | null = null;
	let current: ListNode | null = slow;

	//* reversing the second half of the list
	while (current !== null) {
		let nextNode = current.next;
		current.next = prev;
		prev = current;
		current = nextNode;
	}

	let firstHalf = head;
	let secondHalf = prev;

	while (secondHalf !== null && firstHalf !== null) {
		let nextFirstHalf = firstHalf.next;
		let nextSecondHalf = secondHalf.next;

		firstHalf.next = secondHalf;
		secondHalf.next = nextFirstHalf!;

		firstHalf = nextFirstHalf!;
		secondHalf = nextSecondHalf;
	}

	if (firstHalf !== null) {
		firstHalf.next = null;
	}
}