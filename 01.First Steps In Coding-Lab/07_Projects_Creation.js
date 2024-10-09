function projectsGreation(input) {
    let architect = input[0];
    let projects = Number(input[1]);
    let result = projects * 3;
    let answer = `The architect ${architect} will need ${result} hours to complete ${projects} project/s.`;
    console.log(answer);
    
}

// projectsGreation(["George", "4"]);
// projectsGreation(["Sanya", "9"]);