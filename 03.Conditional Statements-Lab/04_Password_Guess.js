function guessPassword(input) {
    let password = input[0];
    let correctPassword = "s3cr3t!P@ssw0rd";
    if (password === correctPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong Password")
    }
}
guessPassword((["qwerty"]));