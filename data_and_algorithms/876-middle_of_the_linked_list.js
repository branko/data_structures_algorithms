/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    let fast = slow = head;
    
    while (fast) {
        if (fast.next) {
            slow = slow.next;
            fast = fast.next
        }
        
        fast = fast.next
    }
    
    return slow
};