function divisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let nums = []
    for (let i = num1; i <= num2; i++) {
        if (i % 9 === 0) {
            sum += i;
            nums.push(i);
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}
divisibleBy9(["100", "200"])