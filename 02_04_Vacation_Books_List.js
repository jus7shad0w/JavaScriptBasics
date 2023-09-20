function bookToRead(input){
    let pagesInBook = Number(input[0]);
    let pagesPedHour = Number(input[1]);
    let daysToFinish = Number(input[2]);
    let hoursToFinish = pagesInBook / pagesPedHour;
    let hoursPerDay = hoursToFinish / daysToFinish;

    console.log(hoursPerDay);
}
bookToRead(["212","20","2"])