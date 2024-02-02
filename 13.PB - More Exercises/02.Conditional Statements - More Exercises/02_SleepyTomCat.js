function cat(input) {
    let daysOff = Number(input[0]);
    let daysOffplay = daysOff * 127;
    let workDaysPlay = (365 - daysOff) * 63;
    let playTime = daysOffplay + workDaysPlay;
    let diff = Math.abs(playTime - 30000);
    let playTimeHours = Math.floor(diff / 60);
    let playTimeMinutes = diff % 60;
    if (playTime > 30000) {
        console.log(`Tom will run away`);
        console.log(`${playTimeHours} hours and ${playTimeMinutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${playTimeHours} hours and ${playTimeMinutes} minutes less for play`);
    }
}
cat([20])
cat([113])