export default class LinkedList {
  constructor() {
    this.current = null;
    this.head = null;
  }

  push(val) {
    if (this.current) {
      this.current.next = new Node(val);
      this.current.next.prev = this.current;
      this.current = this.current.next;
    } else {
      this.head = new Node(val);
      this.current = this.head;
    }
  }

  pop() {
    let tailVal = this.current.value;
    this.current = this.current.prev;

    if (this.current) {
      this.current.next = null;
    }

    return tailVal;
  }

  shift() {
    let headVal = this.head.value;
    this.head = this.head.next;

    return headVal;
  }

  unshift(val) {
    let oldHeadNode = this.head;
    this.head = new Node(val);
    if (oldHeadNode) {
      this.head.next = oldHeadNode;
      oldHeadNode.prev = this.head;
    }
  }
}

class Node {
  constructor(val, next = null, prev = null) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }
}
