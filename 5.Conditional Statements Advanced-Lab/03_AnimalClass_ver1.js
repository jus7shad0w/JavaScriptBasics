function animalClass(input) {
    let type = input[0];
    if (type == "dog") {
        console.log("mammal");
    } else if (type == "crocodile" || type == "tortoise" || type == "snake") {
        console.log("reptile");
    } else {
        console.log("unknown");
    }
}
animalClass(["dog"])
animalClass(["snake"])
animalClass(["cat"])
