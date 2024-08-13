import { ListNode } from "./ListNode";

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    let prev: ListNode | null = null;
    let current = slow;

    //* reversing the second half of the list
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode!;
    }

    let firstHalf = head;
    let secondHalf = prev;

    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next!;
        secondHalf = secondHalf.next!;
    }

    return true;
};

const listNode: ListNode = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
//* [1,2,2,1] -> true
const listNode2: ListNode = new ListNode(1, new ListNode(2));
//* [1,2]  -> false

console.log(isPalindrome(listNode));
console.log(isPalindrome(listNode2));
