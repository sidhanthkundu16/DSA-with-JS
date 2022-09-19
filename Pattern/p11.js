let n = 5;

// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        document.write(". ");
    }
    // printing star
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
        document.write("*");
    }
    document.write(`<br>`);
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
        document.write(". ");
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        document.write("*");
    }
    document.write(`<br>`);
}