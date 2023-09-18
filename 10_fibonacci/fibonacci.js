const fibonacci = function(n) {
    if (n < 0) {
        throw new Error('Please enter a non-negative integer.');
    }

    if (n <= 1) {
        return n;
    }

    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
};

module.exports = fibonacci;
