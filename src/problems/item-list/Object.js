function sumSalaries(salaries){

    let sum = 0;

    for (let a of Object.values(salaries))
        sum+=a;

    return sum


}


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650


