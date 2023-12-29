function salary(input) {
    let brouserCount = Number(input[0]);
    let payment = Number(input[1]);
    for (let i = 0; i < brouserCount + 2; i++) {
        if (input[i] === 'Facebook') {
            payment -= 150;
        } else if (input[i] === "Instagram") {
            payment -= 100;
        } else if (input[i] === "Reddit") {
            payment -= 50;
        }
        if (payment <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(payment);
}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])