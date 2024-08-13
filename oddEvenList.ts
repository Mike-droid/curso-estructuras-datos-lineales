import { ListNode } from "./ListNode";

function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head) {
		return null;
	}

	let odd = head
	let even = head.next
	let evenHead = even

	while (even !== null && even.next !== null) {
		odd.next = odd.next!.next;
		odd = odd.next!;

		even.next = even.next.next;
		even = even.next;
	}

	odd.next = evenHead

	return head;
}

const listNode: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
/*  input
		[1,2,3,4,5]
		 o-e-o-e-o
		output
		[1,3,5,2,4]
		 o-o-o-e-e
*/

const listNode2: ListNode = new ListNode(2,	new ListNode(1,	new ListNode(3,	new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));
/*	input
		[2,1,3,5,6,4,7]
		 o-e-o-e-o-e-o
		output
		[2,3,6,7,1,5,4]
		 o-o-o-o-e-e-e
*/

console.log(oddEvenList(listNode));
console.log(oddEvenList(listNode2));
