let name ="rajesh";
let age =35;
let colour = "blue";
console.log(name + 'and age is '+ age);
console.log(2+2);

let range = 4;
//range =5;
console.log(range)

const numberofdays = 7; //const cannot be changed once declared constanst variable
// 1. Primitive Data Type:

let s1='hello world'; //String
let num = 30; //Number
let flag = false; //boolean
let isActive = true; //boolean
let price; //null
let model = null; //null
let wheels = undefined; //undefined

//Dynamic type:

let d = 'rajesh';
d=30; // in JS we can use one type to another 

// 2. Reference Data types
// Objects
let user = {
    name:"Tom", // name is the object of user
    age:30 // age is the object of user
} 
console.log(user)
// 1. dot notation
console.log(user.name)
console.log(user.age)
user.age=35;
console.log(user.age)

// 2. Bracket Notation
user['name']='Mark';
console.log(user.name);

// ARRAYS - LIST OF OBJECTS AND ARE DYNAMIC IN JS

let language =['java','javascript','unix']; // blank array or empty array without any value
console.log(language);
console.log(language.length);
language[3]='ruby';
console.log(language);
console.log(language.length);
console.log(language[2]);
console.log(language[4])

//Functions:
function getName(){ // 0 parameter function
    console.log("This is my function");
}

getName(); // 0 argument 

// Parameter function:

function greet(name){ // single param
    console.log('Hello ' + 'Mr. ' +  name);
}

greet('Matt');


function person(name, age){

    console.log('name is ' + name +' '+age);
}

person('Mike',35);
person('RD');
person();

// function with return types

function add(numb1, numb2){
    return numb1+numb2;
}

let sum = add(30,40);
console.log('the sum is  ' + sum);
console.log('the sum is  ' + add(55,45));


function squareRoot(number){

    let root = number * number;
    return root;
}

console.log(squareRoot(3));

