function equalSum(input) {
    let print = "";
    let num1 = input[0];
    let num2 = input[1];
    for (let i = num1; i <= num2; i++) {
        let curNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let k = 0; k < curNum.length; k++) {
            let curDigit = Number(curNum.charAt(k));
            if (k % 2 === 0) {
                evenSum += curDigit;
            } else {
                oddSum += curDigit;
            }
        }
        if(oddSum === evenSum){
            print += `${i} `
        }
    }
    console.log(print);
}
equalSum(["100000", "100050"])
equalSum(["123456", "124000"])