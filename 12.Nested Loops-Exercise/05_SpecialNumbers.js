function specialNumbers(input) {
    let n = Number(input[0]);
    let result = '';
    for (let i = 1111; i <= 9999; i++) {
        let isSpecial = true;
        let digits = String(i).split('');
        for (let digit of digits) {
            if (n % Number(digit) !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            result += i + ' ';
        }
    }
    console.log(result.trim());
}
specialNumbers(["3"])
specialNumbers(["11"])
specialNumbers(["16"])