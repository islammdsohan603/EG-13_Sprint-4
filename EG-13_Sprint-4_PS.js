// 04. Reverse Linked List

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;

    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
};

const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reversedHead = reverseList(head);

let current = reversedHead;
let result = [];

while (current !== null) {
  result.push(current.value);
  current = current.next;
}

console.log(result);
