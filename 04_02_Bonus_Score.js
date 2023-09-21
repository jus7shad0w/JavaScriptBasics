function Bonus(input) {
    let points = Number(input[0]);
    let bonusPoints = 0.0;

    if (points <= 100) {
        bonusPoints = 5;
    } else if (points > 100 && points <= 1000) {
        bonusPoints = points * 0.2;
    } else if (points > 1000) {
        bonusPoints = points * 0.1;
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    }

    if (points % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}
Bonus(["20"]);
Bonus(["175"]);
Bonus(["2703"]);
Bonus(["15875"]);