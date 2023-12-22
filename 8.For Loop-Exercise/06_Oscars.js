function oscars(input) {
    let name = input.shift();
    let points = Number(input.shift());

    for (let i = 1; i < input.length; i += 2) {
        let judgeNamePoints = input[i].length;
        let judgePoints = Number(input[i + 1]);
        points += ((judgeNamePoints * judgePoints) / 2);

        if (points >= 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }
    let neededPoints = (1250.5 - points).toFixed(1);
    console.log(`Sorry, ${name} you need ${neededPoints} more!`);
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])