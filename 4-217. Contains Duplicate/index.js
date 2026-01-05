/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let list = new Set([]);
    for (n of nums) {
        if (list.has(n)) {
            return true
        }
        list.add(n)
    }
    return false;
};

// console.log(containsDuplicate([1, 2, 3, 1]))  -- Examples
// console.log(containsDuplicate([1, 2, 3, 4, 5])) -- Examples