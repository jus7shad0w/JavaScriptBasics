function lunchBreak(input) {
    let movie = input[0];
    let movieLeght = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunch = breakTime / 4;
    let relaxTime = breakTime / 8;
    let timeForMovie = breakTime - lunch - relaxTime;

    if (timeForMovie >= movieLeght) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeForMovie - movieLeght)} minutes free time.`);
    } else {
        (movieLeght > timeForMovie)
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(movieLeght - timeForMovie)} more minutes.`)
    }
}
lunchBreak(["Game of Thrones", "60", "96"])