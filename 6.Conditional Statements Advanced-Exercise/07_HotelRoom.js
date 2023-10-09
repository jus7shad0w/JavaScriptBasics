function vacation(arr) {
    let days = Number(arr[1]);
    let month = arr[0];

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            apartmentPrice = 65;

            if (days > 14) {
                studioPrice = (days * 50) * 0.70;
                apartmentPrice = (days * 65) * 0.90;
            } else if (days > 7) {
                studioPrice = (days * 50) * 0.95;
            } else {
                studioPrice = days * 50;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;

            if (days > 14) {
                studioPrice = (days * studioPrice) * 0.80;
                apartmentPrice = days * 68.70 * 0.90;
            } else {
                studioPrice = days * 75.20;
                apartmentPrice = days * 68.70;
            }
            break;

        case "July":
        case "August":
            studioPrice = 76 * days;
            apartmentPrice = 77;
            if (days > 14) {
                apartmentPrice = (apartmentPrice * days) * 0.90;
            }
            break;
        default:
            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
vacation(["May", "15"])
vacation(["June", "14"])
vacation(["August", "20"])