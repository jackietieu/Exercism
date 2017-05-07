export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if (this.tail) {
      this.tail.next = new Node(val);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
    }

    this.length++;
  }

  pop() {
    let tailVal = this.tail.value;
    this.tail = this.tail.prev;
    this.length--;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return tailVal;
  }

  shift() {
    let headVal = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return headVal;
  }

  unshift(val) {
    let oldHeadNode = this.head;
    this.head = new Node(val);
    this.length++;

    if (oldHeadNode) {
      this.head.next = oldHeadNode;
      oldHeadNode.prev = this.head;
    } else {
      this.tail = this.head;
    }
  }

  delete(val) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== val) {
      currentNode = currentNode.next;
    }

    if (currentNode && currentNode.value === val) {
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next;
      }
      if (currentNode.next) {
        currentNode.prev.next.prev = currentNode.next;
      }

      this.length--;
    }
  }

  count() {
    return this.length;
  }
}

class Node {
  constructor(val, next = null, prev = null) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }
}
