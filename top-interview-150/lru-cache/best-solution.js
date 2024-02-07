// https://leetcode.com/problems/lru-cache

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.pre = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(key, value) {
        const node = new Node(key, value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.pre = this.tail;
            this.tail = node;
        }
        return node;
    }

    delete(node) {
        if (!node.next && !node.pre) { // node is the only one element in the list
            this.head = null;
            this.tail = null;
        } else if (!node.pre) { // node is the first element in list
            this.head = node.next;
            this.head.pre = null;
        } else if (!node.next) { // node is the last element in list
            this.tail = node.pre;
            this.tail.next = null;
        } else { // node is neither the first or the last node of the list
            node.pre.next = node.next;
            node.next.pre = node.pre;
        }
    }
}


class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
        this.dll = new DoubleLinkedList();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const node = this.cache.get(key);
        this.dll.delete(node);
        this.cache.set(key, this.dll.add(node.key, node.value)); // the old one is deleted, you need to update cache!
        return node.value;
    };

    put(key, value) {
        if (this.cache.has(key)) this.dll.delete(this.cache.get(key));
        this.cache.set(key, this.dll.add(key, value));
        if (this.cache.size > this.capacity) {
            const key = this.dll.head.key;
            this.cache.delete(key);
            this.dll.delete(this.dll.head);
        }
    };
}

