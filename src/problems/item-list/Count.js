
function count (a){
    return Object.entries(a).length;
}


let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2