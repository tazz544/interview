function product(a, b) {
    if (b || b === 0) {
        return a * b;
    } else {
        return function(b) {
            return a + b;
        };
    }
}
console.log(product(2, 0));
console.log(product(4)(5));
