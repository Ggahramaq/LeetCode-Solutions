/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (y) {
    let x = y.toString().replace(/\D/g, "");
    let num = 0;
    for (i in x.toString()) {
        num += Number(x.toString()[x.toString().length - i - 1]) * (10 ** (x.toString().length - i - 1))
    }
    return num;
};

console.log(reverse(213))