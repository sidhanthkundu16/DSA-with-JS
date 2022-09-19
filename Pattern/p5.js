let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        if (i == n) {
            document.write("*");
        } else {
            if (j == 1 || j == i) {
                document.write("* ");
            } else {
                document.write(" -");
            }
        }
    }
    document.write(`<br>`);
}