function depositCalculator(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let anualInterest = (input[2]) / 100;
    let anual = anualInterest * deposit;
    let anualPerMonth = anual / 12;
    let result = deposit + (months * anualPerMonth);

    console.log(result);
}
depositCalculator(["200", "3", "5.7"]);