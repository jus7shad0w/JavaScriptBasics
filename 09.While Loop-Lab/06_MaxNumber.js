function isBigger(input) {
    let num = -Infinity;
    let i = 0;

    while (input[i] !== "Stop") {
        let number = Number(input[i]);

        if (number > num) {
            num = number;
        }
        i++;
    }
    console.log(num);
}
isBigger(["100", "99", "80", "70", "Stop"])
isBigger(["-10", "20", "-30", "Stop"])
isBigger(["45", "-20", "7", "99", "Stop"])
isBigger(["999", "Stop"])
isBigger(["-1", "-2", "Stop"])