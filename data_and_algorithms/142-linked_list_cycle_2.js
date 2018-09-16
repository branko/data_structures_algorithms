function ListNode(val) {
    this.val = val;
    this.next = null;
}
function traverse(head) {
  let counter = 0;
  while (head) {
    console.log(head.val)
    head = head.next
    counter++
    if (counter > 10) { return }
  }
  return
}

function detectCycle(head) {
  if (!head) { return null }
  if (!cycleExists(head)) { return null }


}

function cycleExists(head) {
  if (!head) { return false}
  let slow = head;
  let fast = head.next;

  while (fast && fast.next && fast.next.next) {
    if (slow === fast) {
      return true
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;


console.log(cycleExists(node1))