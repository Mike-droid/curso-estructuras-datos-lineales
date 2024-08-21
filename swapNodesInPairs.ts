import { ListNode } from './ListNode';

function swapPairs(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) {
		return head;
	}

	let dummy = new ListNode(0); // A dummy node to help with the head swap
	dummy.next = head;
	let prev: ListNode | null = dummy;
	let current: ListNode | null = head;

	while (current !== null && current.next !== null) {
		let next = current.next;

		// Swap the current pair
		current.next = next.next;
		next.next = current;
		prev!.next = next;

		// Move the pointers forward to the next pair
		prev = current;
		current = current.next;
	}

	// Return the new head (which is the second node of the original list)
	return dummy.next;
}
