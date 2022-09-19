let n = 5;

for (let i = 0; i < n; i++) {
    // For spaces
    for (let j = 0; j < i; j++) {
        document.write(" .");
    }

    // for stars
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        document.write("*");
    }

    document.write(`<br>`);
}