function graduation(input) {
    let name = input[0];
    let sum = 0;
    let i = 1;

    while (i < input.length) {
        let grade = Number(input[i]);

        if (grade >= 4) {
            sum += grade;
        } else {
            console.log(`${name} has been excluded at ${i} grade`);
            return;
        }
        i++;
    }
    let average = (sum / (input.length - 1)).toFixed(2);
    console.log(`${name} graduated. Average grade: ${average}`);
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])