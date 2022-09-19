let n = 10;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == 0 || i == n - 1) {
            document.write("*");
        } else {
            if (j == 0 || j == n - 1) {
                document.write("*");
            } else {
                document.write("- ");
            }
        }
    }
    document.write(`<br>`);
}