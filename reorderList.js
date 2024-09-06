"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reorderList(head) {
    if (!head || !head.next)
        return;
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
    while (secondHalf !== null && firstHalf !== null) {
        var nextFirstHalf = firstHalf.next;
        var nextSecondHalf = secondHalf.next;
        firstHalf.next = secondHalf;
        secondHalf.next = nextFirstHalf;
        firstHalf = nextFirstHalf;
        secondHalf = nextSecondHalf;
    }
    if (firstHalf !== null) {
        firstHalf.next = null;
    }
}
