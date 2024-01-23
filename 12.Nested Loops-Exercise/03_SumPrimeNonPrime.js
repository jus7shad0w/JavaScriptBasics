function sumPrime(input) {
    let isPrime = 0;
    let notPrime = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "stop") {
            break;
        }
        if (input[i] < 0) {
            console.log("Number is negative.");
            continue;
        }
        let isCurrentPrime = true;

        for (let k = 2; k <= Math.sqrt(input[i]); k++) {
            if (input[i] % k === 0) {
                isCurrentPrime = false;
                break;
            }
        }

        if (isCurrentPrime) {
            isPrime += Number(input[i]);
        } else {
            notPrime += Number(input[i]);
        }
    }
    console.log(`Sum of all prime numbers is: ${isPrime}`);
    console.log(`Sum of all non prime numbers is: ${notPrime}`);
}
sumPrime(["3", "9", "0", "7", "19", "4", "stop"])
sumPrime(["30", "83", "33", "-1", "20", "stop"])