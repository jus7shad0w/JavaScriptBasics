function walking(input) {
    let stepsGoal = 10000;
    let steps = 0;
    let i = 0;
    while (i < input.length) {
        if (input[i] === "Going home") {
            let stepsOnTheWayHome = Number(input[i + 1]);
            steps += stepsOnTheWayHome;

            if (steps >= stepsGoal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${steps - stepsGoal} steps over the goal!`);
                return;
            } else {
                console.log(`${stepsGoal - steps} more steps to reach goal.`);
                return;
            }
        } else {
            let dailySteps = Number(input[i]);
            steps += dailySteps;

            if (steps >= stepsGoal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${steps - stepsGoal} steps over the goal!`);
                return;
            }
        }
        i++;
    }
    console.log(`${stepsGoal - steps} more steps to reach goal.`);
}
walking(["1000", "1500", "2000", "Going home", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
walking(["1500", "300", "2500", "3000", "Going home", "200"])
walking(["125", "250", "4000", "30", "2678", "4682"])