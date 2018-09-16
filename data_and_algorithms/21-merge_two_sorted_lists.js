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

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode('dummy');

  let current = dummy;

  while (l1 || l2) {
    if (!l1) {
      current.next = l2;
      l2 = l2.next;
    } else if (!l2) {
      current.next = l1;
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      current.next = l2;
      l2 = l2.next
    }
    current = current.next
  }

  return dummy.next
}

let list1 = toList([1, 3, 5, 7])
let list2 = toList([2, 4, 6, 8])

traverseList(mergeTwoLists(list1, list2))