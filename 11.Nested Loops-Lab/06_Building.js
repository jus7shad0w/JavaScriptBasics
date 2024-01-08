function building(input) {
    let roomNumber = 0;
    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);
    let output = "";

    for (let floor = floorsCount; floor >= 1; floor--) {
        if (floor === floorsCount && floorsCount >= 1) { // Променено условие тук
            for (let room = roomsCount - 1; room >= 0; room--) {
                output += `L${floor}${roomNumber} `;
                roomNumber++;
            }
        } else if (floor % 2 === 0) {
            let roomType = "O";

            for (let roomNumber = 0; roomNumber < roomsCount; roomNumber++) {
                output += `${roomType}${floor}${roomNumber} `;
            }
        } else if (floor % 2 !== 0) {
            let roomType = "A";

            for (let roomNumber = 0; roomNumber < roomsCount; roomNumber++) {
                output += `${roomType}${floor}${roomNumber} `;
            }
        }
        output += "\n";
    }
    console.log(output);
}
building(["6", "4"])
building(["9", "5"])
building(["4", "4"])