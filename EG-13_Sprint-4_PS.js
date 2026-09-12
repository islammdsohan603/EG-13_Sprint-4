// 05. Middle of the Linked List

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middle = middleNode(head);

let current = middle;
let result = [];

while (current !== null) {
  result.push(current.value);
  current = current.next;
}

console.log(result);
