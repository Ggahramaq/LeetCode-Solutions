/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0;
    let prev = 0;
    const value_symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    for (i of s) {
        const curr = value_symbols[i];

        if (curr > prev) {
            num += curr - prev * 2
        } else {
            num += curr
        }

        prev = curr;
    }
    return num;
};