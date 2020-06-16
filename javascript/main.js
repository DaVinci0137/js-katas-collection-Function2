function add(x, y) {
    return x + y
}
console.log(add(2, 4));

function multiply(x, y) {
    let answer = 0
    for (let i = 0; i < y; i++) {
        answer = add(x, answer)
    }
    return answer
}
console.log(multiply(6, 4));

function power(x, n) {
    let answer = 1
    for (let i = 0; i < n; i++) {
        answer = multiply(x, answer)
    }
    return answer
}
console.log(power(2, 8));
console.log(power(3, 4));

function factorial(x) {
    let answer = 1
    for (let i = 1; i <= x; i++) {
        answer = multiply(i, answer)
    }
    return answer
}
console.log(factorial(5));