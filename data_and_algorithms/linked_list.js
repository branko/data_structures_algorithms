function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  if (!head) { return null }

  let lastInChain = head;
  let last = lastInChain;
  let current = head.next

  while (current) {
    let tempNext = current.next;
    current.next = last;

    last = current;
    current = tempNext;

    if (current === null) { head = last }
  }

  lastInChain.next = null

  return head

};

node1 = new ListNode(1)
node2 = new ListNode(2)
node3 = new ListNode(3)
node4 = new ListNode(4)
node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

var list = function(head) {
  let current = head
  while (current) {
    console.log(current.val)
    current = current.next
  }
}

reverseList(node1)


function mixArgs(first, second = 'b') {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d"
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}

mixArgs("a", "b");









