function exam(input) {
    let badGradeCount = Number(input[0]);
    let goodGrade = 0;
    let badGrade = 0;
    let averageGrade = 0;
    let lastAssigment = "";

    let i = 1;
    let assigment = input[i];

    while (assigment !== "Enough") {
        let lastProblem = assigment;
        let grade = Number(input[i + 1]);

        if (grade <= 4) {
            badGrade++;
            if (badGrade === badGradeCount) {
                break;
            }
        }

        averageGrade += grade;
        goodGrade++;
        lastAssigment = lastProblem;

        i += 2;
        assigment = input[i];
    }
    let finalGrade = (averageGrade / goodGrade).toFixed(2);

    if (badGrade === badGradeCount) {
        console.log(`You need a break, ${badGrade} poor grades.`);
    } else {
        console.log(`Average score: ${finalGrade}`);
        console.log(`Number of problems: ${goodGrade}`);
        console.log(`Last problem: ${lastAssigment}`);
    }
}
exam(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])
exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])