module.exports = function multiply(first, second) {
    var a = first.split('').reverse();
    var b = second.split('').reverse();
    var sizeA = a.length;
    var sizeB = b.length;
    var result = new Array(sizeA + sizeB).fill(0);

    for (var i = 0; i < sizeA; i++) {
        for (var j = 0; j < sizeB; j++) {
            result[i + j] += a[i] * b[j];
        }

        for (k = 0; k < result.length - 1; k++) {
            result[k + 1] += Math.trunc(result[k] / 10);
            result[k] = result[k] % 10;
        }
    }

    if (result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse().join('');
}
