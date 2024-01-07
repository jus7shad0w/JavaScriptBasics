function sumOfTwoNumbers(input) {
    let startNUm = Number(input[0]);
    let endNum = Number(input[1]);
    let seekNum = Number(input[2]);
    let combinationCount = 0;
    for (let i = startNUm; i <= endNum; i++) {
        for (let k = startNUm; k <= endNum; k++) {
            combinationCount++;
            if (i + k == seekNum) {
                console.log(`Combination N:${combinationCount} (${i} + ${k} = ${seekNum})`);
                return;
            }
        }
    }
    console.log(`${combinationCount} combinations - neither equals ${seekNum}`);
}
sumOfTwoNumbers(["1", "10", "5"])
sumOfTwoNumbers(["88", "888", "1000"])
sumOfTwoNumbers(["23", "24", "20"])
sumOfTwoNumbers(["88", "888", "2000"])