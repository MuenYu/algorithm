/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let mergedList = new ListNode(0);
    let curNode = mergedList;
    while (lists.length > 0) {
        let minVal = Infinity;
        let minIdx = 0;
        for (let i = 0; i < lists.length; ++i) {
            if (lists[i] && minVal > lists[i].val) {
                minVal = lists[i].val;
                minIdx = i;
            }
        }
        if (minVal === Infinity) {
            break;
        }
        curNode.next = lists[minIdx];
        curNode = curNode.next;
        lists[minIdx] = lists[minIdx].next;
        if (!lists[minIdx]) 
            lists.splice(minIdx,1);
    }
    return mergedList.next;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
console.log(mergeKLists([list1, list2, list3]));