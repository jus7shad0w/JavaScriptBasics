function cinemaTickets(input) {
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (true) {
        let movieName = input.shift();

        if (movieName === "Finish") {
            break;
        }

        let seats = Number(input.shift());
        let currentMovieTickets = 0;

        while (true) {
            let ticketType = input.shift();

            if (ticketType === "End") {
                break;
            }

            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }

            currentMovieTickets++;

            if (currentMovieTickets === seats) {
                break;
            }
        }

        let percentageFull = (currentMovieTickets / seats) * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        totalTickets += currentMovieTickets;
    }

    let studentPercentage = (studentTickets / totalTickets) * 100;
    let standardPercentage = (standardTickets / totalTickets) * 100;
    let kidPercentage = (kidTickets / totalTickets) * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercentage.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"])