function inchesToCentimeter(input) {
    let centimeter = 2.54;
    let inches = Number(input[0]);
    let result = centimeter * inches;
    console.log(result);

}

inchesToCentimeter(["5"]);
inchesToCentimeter(["7"]);