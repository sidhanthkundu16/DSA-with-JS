let n = 5;

for (let i = 1; i <= n; i++) {
    //no. of spaces in each row
    for (let j = 1; j <= n - i; j++) {
        document.write(". ");

    }
    // no. of stars in each row 
    for (let k = 0; k < 2 * i - 1; k++) {
        document.write("*");
    }
    document.write(`<br>`);
}