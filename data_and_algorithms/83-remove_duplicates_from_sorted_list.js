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
  return ''
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



// Writer/Reader + Dummy

// let dummy = new node
// writer = dummy
// reader = writer.next

// while reader.next !== null
  // if reader.val === reader.next.val
    // writer.next = reader.next.next
    // runner = writer.next
  // else
    // reader = reader.next
    // writer = writer.next
//return dummy.next

function toList(array) {
  let head = new ListNode(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }

  return head;
}



function deleteDuplicates(head) {
  if (!head) { return null }
  if (!head.next) { return head }

  let dummy = new ListNode('dummy');
  dummy.next = head;

  let writer = dummy;
  let reader = head;

  while (reader) {
    if (reader.next && reader.val === reader.next.val) {
      reader = reader.next
    } else {
      writer.next = reader;
      writer = writer.next;
      reader = reader.next;
    }
  }

  return dummy.next;
}

let node = toList([1, 2, 2, 3, 3]);

console.log('\n\n----')
console.log(traverseList(deleteDuplicates(node)))








