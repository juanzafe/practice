let user={
    name: "John",
    surname: "Smith",


};

user.name= "Pete" ;
delete user.name;


let salaries={
    John: 100,
    Ann:160,
    Pete: 130
}
let sum= 0;
for (let money in salaries){
    sum = sum + salaries[money]
}

let menu ={
    width: 200,
    height: 300,
    title: "my menu"

}

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof obj[key]== "number"){
            obj[key]*=2;
    }
    }
}