function add(x, y) {
    return x + y
}
console.log(add(2, 4));

function multiply(x, y) {
    let answer = x
    for (var i = 0; i < y - 1; i++) {
        answer += x
    }
    return answer
}
console.log(multiply(6, 4));

function power(x, y) {
    Math.pow(x, y);
}
console.log(power(2, 8));
console.log(power(3, 4));

function factorial(x) {
    return x;
}
console.log(factorial(5));


