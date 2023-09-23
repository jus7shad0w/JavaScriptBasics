function cinema(input) {
    let dayOfWeek = input[0];
    let ticketPrice1 = 12;
    let ticketPrice2 = 14;
    let ticketPrice3 = 16;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(ticketPrice1);
            break;
        case "Wednesday":
        case "Thursday":
            console.log(ticketPrice2);
            break;
        case "Saturday":
        case "Sunday":
            console.log(ticketPrice3);
            break;
    }
}
cinema(["Monday"])