
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function traverseList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

function generateList(start, stop) {
  let head = new ListNode(start);
  let current = head

  for (let i = start + 1; i <= stop; i++) {
    current.next = new ListNode(i);
    current = current.next;

  }

  return head;
}

function generateDuplicatesList(start, stop) {
  let head = new ListNode(start);
  let current = head
  for (let i = start + 1; i <= stop; i++) {
    current.next = new ListNode(i);
    current = current.next;

    if (Math.random() <= 0.5) {
      current.next = new ListNode(i);
      current = current.next;
    }
  }

  return head;
}

// dummy = new node

// prev = dummy
// current = head
// next = current.next

// while next != null
//   current.next = prev
//   prev = current
//   current = next
//   next = current.next

// current.next = prev
// head.next = null


function reverseList(head) {
  if (!head) { return null }
  if (head.next === null) { return head }

  let dummy = new ListNode('');

  let prev = dummy;
  let current = head;
  let next = head.next;

  while (next !== null) {
    current.next = prev;

    // Increment pointers
    prev = current;
    current = next;
    next = current.next;
  }

  current.next = prev;

  head.next = null

  return current;
}

let head = generateList(1, 10)
traverseList(reverseList(head))
















