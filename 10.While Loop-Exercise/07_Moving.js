function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let room = width * length * height;
    let i = 0
    while (i < input.length) {
        if (input[i] == "Done") {
            console.log(`${room} Cubic meters left.`);
            return;
        } else if (input[i] >= room) {
            console.log(`No more free space! You need ${Number(input[i]) - room} Cubic meters more.`);
            return;
        }
        room -= Number(input[i]);
        i++;
    }

}
moving(["10", "10", "2", "20", "20", "20", "20", "122"])
moving(["10", "1", "2", "4", "6", "Done"])