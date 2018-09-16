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



oddDummy 1 3 5
evenDummy 2 4


var oddEvenList = function(head) {
    if (!head) { return null }
      
    let oddDummy = new ListNode('odd');
    let evenDummy = new ListNode('even');

    let oddLast = oddDummy;
    let evenLast = evenDummy;
    let odd = true;
    let current = head;
        
    while (current) {
        if (odd) {
            oddLast.next = current;
            oddLast = current;
        } else {
            evenLast.next = current;
            evenLast = current;
        }

        odd = !odd;
        current = current.next;
    }
    evenLast.next = null;
    
    oddLast.next = evenDummy.next
    return oddDummy.next
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

traverse(oddEvenList(node1))