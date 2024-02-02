function pool(input) {
    let poolSize = Number(input[0]);
    let firstPipe = Number(input[1]);
    let secondPipe = Number(input[2]);
    let hours = Number(input[3]);
    let firstPipePercent = firstPipe * hours;
    let secondPipePercent = secondPipe * hours;
    let total = firstPipePercent + secondPipePercent;
    let fillPercent = (total / poolSize) * 100;

    if (fillPercent < 100) {
        console.log(`The pool is ${fillPercent.toFixed(2)}% full. Pipe 1: ${(firstPipePercent / total * 100).toFixed(2)}%. Pipe 2: ${(secondPipePercent / total * 100).toFixed(2)}%.`);
    } else if (fillPercent > 100) {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(total - poolSize).toFixed(2)} liters.`);
    }
}
pool([1000, 100, 120, 3])
pool([100, 100, 100, 2.5])
pool([100, 100, 100, 0.5])
