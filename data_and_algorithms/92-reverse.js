

function ListNode(val) {
  this.val = val;
  this.next = null;
}

node1 = new ListNode(1)
node2 = new ListNode(2)
node3 = new ListNode(3)
node4 = new ListNode(4)
node5 = new ListNode(5)
node6 = new ListNode(6)
node7 = new ListNode(7)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7


var list = function(head) {
  let currentNode = head;

  while (!!currentNode) {
    // console.log(currentNode.val);
    wait(currentNode.val)
    currentNode = currentNode.next;
  }
}

var reverseBetween = function(head, m, n) {
    let currentNode = head;
    let tempNext;
    let i = 1;
    let cut;
    let lastInChain;
    let sideChainHead;
    let prevNode;

    while (currentNode) {

      tempNext = currentNode.next

      if (i === m) {

        if (m !== 1) {
          cut = prevNode
        };

        lastInChain = currentNode;
        sideChainHead = currentNode;

      } else if (i > m && i <= n) {
        currentNode.next = sideChainHead
        sideChainHead = currentNode

        if (i === n && tempNext === null) {
          lastInChain.next = null
        }

        

      } else if (i === n + 1) {


        if (cut) {
          cut.next = sideChainHead
        }

        lastInChain.next = currentNode
      }

      prevNode = currentNode;
      currentNode = tempNext;

      i++;
    }

    let temp = lastInChain.next

    

    return m == 1 ? sideChainHead : head

};

function wait(msg) {
  var start = Date.now(),
      now = start;
  while (now - start < 250) {
    now = Date.now();
  }
  console.log(msg)
}

let head = reverseBetween(node1, 3, 7)

list(head)


