function trainingRoom(input) {
    let roomLength = Number(input[0]) * 100;
    let roomWidth = Number(input[1]) * 100;
    let coridor = 100;
    let workSpaceWidth = Math.floor((roomWidth - coridor) / 70);
    let workSpaceLength = Math.floor(roomLength / 120);
    let result = (workSpaceLength * workSpaceWidth) - 3;

    console.log(result);
}
trainingRoom([15, 8.9])
trainingRoom([8.4, 5.2])