function trapeziod(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let result = (a + b) * c / 2;
    console.log(result.toFixed(2));
}
trapeziod([8, 13, 7])