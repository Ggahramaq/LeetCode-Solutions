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
    if (y.toString()[0] == "-") {
        num = "-" + num;
    }
    if (Number(num) > 2 ** 31 || Number(num) < (2 ** 31 * -1)) {
        num = 0;
    }
    return Number(num);
};

// console.log(reverse(-213)) <-- example of the use