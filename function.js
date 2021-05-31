function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result: ' + result;
}
getAverage(10, 20, 30);
getAverage(10, 20);
function getAverage2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return 'result: ' + result;
}
getAverage2(1, 2, 3, 2, 1, 100);
