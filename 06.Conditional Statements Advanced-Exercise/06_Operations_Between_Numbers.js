function operationBetweeenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOdd = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            } console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            } console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            } console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOdd}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} ${operator} ${num2} = ${(result).toFixed(2)}`);
            }
            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = (num1 % num2);
                console.log(`${num1} ${operator} ${num2} = ${(result)}`);
            }
            break;
    }
}
operationBetweeenNumbers(["10", "12", "+"])
operationBetweeenNumbers(["123", "12", "/"])
operationBetweeenNumbers(["112", "0", "/"])
operationBetweeenNumbers(["10", "1", "-"])
operationBetweeenNumbers(["10", "3", "%"])
operationBetweeenNumbers(["10", "0", "%"])
operationBetweeenNumbers(["7", "3", "*"])