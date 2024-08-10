var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function oddEvenList(head) {
    if (!head) {
        return null;
    }
    var odd = head;
    var even = head.next;
    var evenHead = even;
    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}
var listNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
/*  input
        [1,2,3,4,5]
         o-e-o-e-o
        output
        [1,3,5,2,4]
         o-o-o-e-e
*/
var listNode2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));
/*	input
        [2,1,3,5,6,4,7]
         o-e-o-e-o-e-o
        output
        [2,3,6,7,1,5,4]
         o-o-o-o-e-e-e
*/
console.log(oddEvenList(listNode));
console.log(oddEvenList(listNode2));
