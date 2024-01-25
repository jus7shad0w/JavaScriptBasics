function triangle(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let result = (a * b) / 2;
    console.log(result.toFixed(2));
}
triangle([20, 30])
triangle([15, 35])
triangle([7.75, 8.45])
triangle([1.23456, 4.56789])
