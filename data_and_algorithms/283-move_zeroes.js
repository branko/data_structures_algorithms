// a = 0
// b = 1

// while b === val && b < array.length
//   b++
// while a !== val AND a < b
//   a++

// swap a, b


function moveZeroes(array) {
  // Anchor - Runner mental model
  // O(N) time and O(1) space

  let anchor = 0;
  let runner = 1;

  while (runner < array.length) {
    while (array[runner] === 0 && array[anchor] === 0) {
      if (runner > array.length) {
        return;
      } else {
        runner++;
        if (runner >= array.length) return;
      }
    }

    if (array[anchor] === 0) {
      [array[anchor], array[runner]] = [array[runner], array[anchor]];
    }
    
    anchor++;
    runner++;
  }
}

moveZeroes([1,2,0,3,0,1,2,3])


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





