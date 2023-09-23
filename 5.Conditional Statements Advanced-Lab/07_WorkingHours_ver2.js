function workingTime(input) {
    let time = Number(input[0]);
    let dayOfWeek = input[1];
    let openTime = (time >= 10 && time <= 18) % 24;
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time = openTime) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;
        case "Sunday":
            console.log("closed");
            break;
    }
}
workingTime(["11", "Monday"])