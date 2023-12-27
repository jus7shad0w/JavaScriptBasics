function sumNum(input) {
    let num = Number(input[0]);
    let sum = 0;
    let i = 1;
    while (sum <= num && i < input.length) {
        sum += Number(input[i]);
        i++;
    }
    console.log(sum);
}
sumNum(["100", "10", "20", "30", "40"])
sumNum(["20", "1", "2", "3", "4", "5", "6"])