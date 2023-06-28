const fibonacci = (num) => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2)
}


// 2, 4, 6, 10