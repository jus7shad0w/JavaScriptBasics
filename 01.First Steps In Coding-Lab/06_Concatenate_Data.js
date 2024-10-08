function concatenateData(input) {
    let firstName = input[0];
    let secondName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${city}.`);
    
}

concatenateData(["Maria", "Ivanova", 20 , "Sofia"])