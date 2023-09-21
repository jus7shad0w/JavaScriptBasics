function timePlusFifteen(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let afterFifteen = 15;
    let totalMinutes = hour * 60 + minutes;
    let nextTotalMin = (totalMinutes + afterFifteen) % (24 * 60);
    if (minutes < 10) {
        minutes = (`0${minutes}`)
    } else {
        minutes = minutes
    }
    let nextHour = Math.floor(nextTotalMin / 60);
    let nextMinutes = nextTotalMin % 60;
    if (nextMinutes < 10) {
        nextMinutes = (`0${nextMinutes}`)
    }
    // console.log(`Time now is: ${hour}:${minutes}`);
    console.log(`${nextHour}:${nextMinutes}`);
}
timePlusFifteen(["1", "46"])