function summerOutfit(input) {
    let degreesInput = Number(input[0]);
    let partOfTheDayInput = input[1];
    let outfit = 0;
    let shoes = 0;
    switch (partOfTheDayInput) {
        case "Morning":
            if (degreesInput >= 10 && degreesInput <= 18) {
                outfit = "Sweatshirt"
                shoes = "Sneakers"
            } else if (degreesInput > 18 && degreesInput <= 24) {
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if (degreesInput >= 25) {
                outfit = "T-Shirt"
                shoes = "Sandals"
            }
            break;
        case "Afternoon":
            if (degreesInput >= 10 && degreesInput <= 18) {
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if (degreesInput > 18 && degreesInput <= 24) {
                outfit = "T-Shirt"
                shoes = "Sandals"
            } else if (degreesInput >= 25) {
                outfit = "Swim Suit"
                shoes = "Barefoot"
            }
            break;
        case "Evening":
            if (degreesInput >= 10 && degreesInput <= 18) {
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if (degreesInput > 18 && degreesInput <= 24) {
                outfit = "Shirt"
                shoes = "Moccasins"
            } else if (degreesInput >= 25) {
                outfit = "Shirt"
                shoes = "Moccasins"
            }
            break;
    }
    console.log(`It's ${degreesInput} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["16", "Morning"])
summerOutfit(["22", "Afternoon"])
summerOutfit(["28", "Evening"])