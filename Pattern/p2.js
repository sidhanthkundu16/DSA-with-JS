var n = 5;
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i; j++) {
        document.write("*");
    }
    document.write(`<br>`);
}