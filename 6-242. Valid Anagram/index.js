/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let s1 = s.split('').sort().join();
    let t1 = t.split('').sort().join();
    return s1 === t1
};

console.log(isAnagram("ollhe", "hello")) // should be true
console.log(isAnagram('hello', 'hloe')) // should be false