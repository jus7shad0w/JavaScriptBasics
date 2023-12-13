function evenStep(input) {
    let num = Number(input[0]);

    for (let step = 0; step <= num; step += 2) {
        console.log(2 ** step);
    }
}
evenStep(["3"])
evenStep(["5"])
evenStep(["7"])