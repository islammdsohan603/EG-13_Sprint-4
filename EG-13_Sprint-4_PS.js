// 07. Remove Nth Node From End of List

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};

const head = new ListNode(1);

head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const resultHead = removeNthFromEnd(head, 2);

let current = resultHead;
let result = [];

while (current !== null) {
  result.push(current.value);
  current = current.next;
}

console.log(result);
