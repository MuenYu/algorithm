// https://leetcode.com/problems/kth-largest-element-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = [];
    
    for (let num of nums) {
        if (minHeap.length < k) {
            minHeap.push(num);
            if (minHeap.length === k) {
                buildMinHeap(minHeap);
            }
        } else if (num > minHeap[0]) {
            minHeap[0] = num;
            heapify(minHeap, 0);
        }
    }
    
    return minHeap[0];
};

function buildMinHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;
    
    if (left < arr.length && arr[left] < arr[smallest]) {
        smallest = left;
    }
    
    if (right < arr.length && arr[right] < arr[smallest]) {
        smallest = right;
    }
    
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, smallest);
    }
}