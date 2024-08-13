import { ListNode } from "./ListNode";

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next!
    fast = fast.next.next!
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

const listNode: ListNode = new ListNode(3,	new ListNode(2,	new ListNode(0,	new ListNode(4))));
const listNode2: ListNode = new ListNode(1,	new ListNode(2));
const listNode3: ListNode = new ListNode(1);
