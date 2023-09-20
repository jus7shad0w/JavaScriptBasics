function projectGreation (input){
    let name = input[0];
    let projects = input[1];
    let result1 = projects * 3;
    
    let result2 = `The architect ${name} will need ${result1} hours to complete ${projects} project/s.`;
    console.log(result2);

}

projectGreation(["George","4"]);