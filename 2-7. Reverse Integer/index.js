/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (y) {
    y = y.toString()
    let x = y.replace(/\D/g, "");
    let num = 0;
    for (i in x) {
        num += Number(x[x.length - i - 1]) * (10 ** (x.length - i - 1))
    }
    if (y[0] == "-") {
        num = "-" + num;
    }
    if (Number(num) > 2 ** 31 || Number(num) < (2 ** 31 * -1)) {
        num = 0;
    }
    return Number(num);
};

// console.log(reverse(-1237172)) <-- example of use