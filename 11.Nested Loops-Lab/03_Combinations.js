function combination(input) {
    let num = Number(input[0]);
    let count = 0;
    for (let a = 0; a <= num; a++) {
        for (let b = 0; b <= num; b++) {
            for (let c = 0; c <= num; c++) {
                if (a + b + c == num) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
combination(["25"])
combination(["20"])
combination(["5"])