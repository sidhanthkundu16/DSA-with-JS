let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        document.write("- ");
    }

    for (let k = 0; k < i; k++) {
        document.write("*");
    }
    document.write(`<br>`);
}