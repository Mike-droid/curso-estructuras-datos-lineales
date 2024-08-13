"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode_1 = require("./ListNode");
function isPalindrome(head) {
    if (!head || !head.next)
        return true;
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    var prev = null;
    var current = slow;
    //* reversing the second half of the list
    while (current !== null) {
        var nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    var firstHalf = head;
    var secondHalf = prev;
    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
}
;
var listNode = new ListNode_1.ListNode(1, new ListNode_1.ListNode(2, new ListNode_1.ListNode(2, new ListNode_1.ListNode(1))));
//* [1,2,2,1] -> true
var listNode2 = new ListNode_1.ListNode(1, new ListNode_1.ListNode(2));
//* [1,2]  -> false
console.log(isPalindrome(listNode));
console.log(isPalindrome(listNode2));
