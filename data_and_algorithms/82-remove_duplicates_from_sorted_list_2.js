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

function deleteDuplicates(head) {
  if (!head) { return null }
  if (!head.next) { return head }

  let dummy = new ListNode('dummy');
  dummy.next = head;

  let writer = dummy;
  let reader = head;
  let duplicate;

  while (reader) {

    if (reader.next && reader.val === reader.next.val) {
      duplicate = reader.val;
      reader = reader.next.next;
      writer.next = reader;
    } else if (duplicate !== undefined && reader.val === duplicate) {
      writer.next = reader.next;
      reader = writer.next 
      duplicate = undefined;
    } else {
      writer = reader;
      reader = writer.next;
    }
  }

  return dummy.next;
}

let node = toList([0, 0, 0, 0, 0])

traverseList(deleteDuplicates(node))


















