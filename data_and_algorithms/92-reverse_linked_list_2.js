
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function traverseList(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  return '';
}

function toList(array) {
  let head = new ListNode(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }

  return head;
}

// make dummy

// prev = dummy
// current = head
// next = head.next

// index = 1
// let cut;
// let start;

// while index <= N
//   if index === M
//     start = prev
//     cut = current
//     ++++increment all
//   else if index <= N AND index > M
//     current.next = prev
//     current = next
//     ++++increment all
//   else if index === N
//     current.next = prev
//     start.next = current
//     cut.next = next
//     increment++++++

function reverseBetween(head, m, n) {
  if (!head) { return null };
  if (m === n) { return head }

  let dummy = new ListNode('dummy');
  dummy.next = head;

  let prev = dummy;
  let current = head;
  let next = head.next;

  let cut;
  let start;
  let index = 1;

  while (index <= n) {

    if (index === m) {
      start = prev;
      cut = current;


    } else if (index < n && index > m) {
      current.next = prev;

    } else if (index === n) {
      current.next = prev;
      start.next = current;
      cut.next = next;

      return dummy.next
    }

    index++;

    prev = current
    current = next;
    next = next.next;
  }

  return dummy.next
}

let list = toList([3, 5])
traverseList(reverseBetween(list, 1, 2))




