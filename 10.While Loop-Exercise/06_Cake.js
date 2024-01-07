function cake(input) {
    let size = Number(input[0]) * Number(input[1]);
    let i = 2;
    while (i < input.length) {
        if (input[i] == "STOP") {
            console.log(`${size} pieces are left.`);
            return;
        } else if (input[i] >= size) {
            console.log(`No more cake left! You need ${Number(input[i] - size)} pieces more.`);
            return;
        }
        size -= Number(input[i]);
        i++;
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"])
cake(["10", "2", "2", "4", "6", "STOP"])