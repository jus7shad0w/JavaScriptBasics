function dayOfWeek(dayNum) {

    const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (dayNum < 1 || dayNum > 7) {
        console.log("Error");
        return;
    }
    const index = dayNum - 1;
    const day = daysInWeek[index];

    console.log(`${day}`);
}
dayOfWeek(["1"])
dayOfWeek(["2"])
dayOfWeek(["3"])
dayOfWeek(["4"])
dayOfWeek(["5"])
dayOfWeek(["6"])
dayOfWeek(["7"])
dayOfWeek(["-1"])
