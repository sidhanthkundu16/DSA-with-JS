let n = 5;

for (let i = 1; i <= n; i++) {
    // for spaces
    for (let j = 1; j <= n - i; j++) {
        document.write(" .");
    }
    // for stars

    for (let k = 0; k < 2 * i - 1; k++) {
        if (i == 1 || i == n) {
            document.write("*");
        } else {
            if (k == 0 || k == 2 * i - 2) {
                document.write("*");
            } else {
                document.write(" .");

            }
        }
    }
    document.write(`<br>`);
}