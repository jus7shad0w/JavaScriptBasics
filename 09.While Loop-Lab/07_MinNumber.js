function isUnder(input) {
    let num = Infinity;
    let i = 0;

    while (input[i] !== "Stop") {
        let number = Number(input[i]);

        if (number < num) {
            num = number;
        }
        i++;
    }
    console.log(num);
}
isUnder(["100", "99", "80", "70", "Stop"])
isUnder(["-10", "20", "-30", "Stop"])
isUnder(["45", "-20", "7", "99", "Stop"])
isUnder(["999", "Stop"])
isUnder(["-1", "-2", "Stop"])