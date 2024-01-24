function trainTheTrainers(input) {
    let juryCount = Number(input[0]);
    let totalSum = 0;
    let totalGrades = 0;

    for (let i = 1; i < input.length - 1; i += juryCount) {
        let presentation = input[i++];
        let sum = 0;
        if (presentation == "Finish") {
            break;
        }
        for (let k = 0; k < juryCount; k++) {
            let grade = Number(input[i + k]);
            sum += grade;
        }

        let average = sum / juryCount;
        totalSum += sum;
        totalGrades += juryCount;

        console.log(`${presentation} - ${average.toFixed(2)}.`);
    }

    let overallAverage = totalSum / totalGrades;
    console.log(`Student's final assessment is ${overallAverage.toFixed(2)}.`);
}


trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"])
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])