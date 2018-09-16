var swapPairs = function(head) {
  if (!head) { return head }
  if (!head.next) { return head }

  let dummy = new ListNode('dummy');

  let prev = dummy;
  let current = head.next;
  let temp = current.next;

  dummy.next = current;

  while (current) {
    prev.next = current;
    current.next = head;
    head.next = temp;

    if (!current || !current.next || !temp || !temp.next || !head.next) return dummy.next

    prev = current.next;
    head = temp;
    current = head.next;
    temp = current.next;
  }


  return dummy.next
};