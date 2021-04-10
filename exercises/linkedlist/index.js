// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insertFirst(data = null) {
        const newNode = new Node(data);
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.count++;
    }

    size() {
        return this.count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    clear() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        const firstItem = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
        this.count -= 1;
        return firstItem;
    }

    removeLast() {
        let currentNode = this.head;
        let prevNode = null;
        if (this.count < 2) {
            const head = this.head;
            this.head = null;
            return head;
        }

        while(currentNode && currentNode.next) {
            if (currentNode.next && !currentNode.next.next) {
                // next exists but nex next doesn't exist
                prevNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        if (prevNode) {
            prevNode.next = null;
        }
        this.count -= 1;
        return currentNode;
    }

    insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.count++;
            return newNode;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.tail = newNode;
        this.count++;
        return newNode;
    }

    getAt(index = 0) {
        let currentNode = this.head;
        if (index - 1 > this.count) {
            return null;
        }
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    removeAt(index = 0) {
        if (index === 0) {
            return this.removeFirst();
        }
        if (index === this.count-1) {
            return this.removeLast();
        }
        if (index > this.count-1) {
            return null;
        }

        let currentNode = this.head;
        let prevNode = null;
        for(let i = 0; i < index; i++) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        if (prevNode && currentNode && currentNode.next) {
            prevNode.next = currentNode.next;
        }
        this.count--;
        return currentNode;
    }

    insertAt(data = null, index = 0) {
        if (index === 0) {
            return this.insertFirst(data);
        }
        if (index === this.count-1) {
            return this.insertLast(data);
        }
        const newNode = new Node(data);
        let currentNode = this.head;
        let prevNode = null;
        for(let i = 0; i < index; i++) {
            if (currentNode && !currentNode.next) {
                currentNode.next = newNode;
                this.tail = newNode;
                break;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        if (index < this.count - 1) {
            prevNode.next = newNode;
            newNode.next = currentNode;
        }

        this.count++;
        return newNode;
    }

    forEach(fn) {
        let currentNode = this.head;
        while(currentNode) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
