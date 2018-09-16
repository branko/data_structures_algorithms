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

function numComponents(head, G) {
  let hashTable = {};
  let counter = 0;
  let current = head;

  G.forEach(num => {
    hashTable[num] = true;
  })

  while (current) {
    if (hashTable[current.val]) {
      counter++;
    }

    while (hashTable[current.val] && hashTable[current.next.val]) {
      current = current.next;
    }

    current = current.next;
  }

  return counter
} 