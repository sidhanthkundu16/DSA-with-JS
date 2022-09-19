// Hollow Diamond

let n = 5;

for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
        document.write(". ");
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        if (k == 0 || k == 2 * i - 2) {
            document.write("*");
        } else {
            document.write(" .");
        }
    }
    document.write(`<br>`);
}

// downside

for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
        document.write(". ");
    }
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k == 1 || k == (n - i) * 2 - 1) {
            document.write("*");
        } else {
            document.write(" .");
        }
    }
    document.write(`<br>`);
}