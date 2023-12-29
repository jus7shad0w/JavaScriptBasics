function oldBooks(input) {
    let favoriteBook = input[0];
    let booksCount = 0;
    let i = 1;
    while (i < input.length) {
        if (input[i] == favoriteBook) {
            console.log(`You checked ${booksCount} books and found it.`);
            return;
        }
        if (input[i] === "No More Books") {
            break;
        }
        booksCount++;
        i++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksCount} books.`);
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"])
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"])
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])