//Arithmatic
//Assignment
//Ternary
//Comparision

// Arithmetic Operators

let x= 10;
let y = 5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(y/x);
console.log(x**y); //power of 
console.log(y**x); // power of 

let p =1;
let q = p++;
console.log(p); //2
console.log(q); //1

let p1 =1;
let q1 = ++p1;
console.log(p1); //2
console.log(q1); //2

let m = 2;
console.log(m--);
console.log(m);


// Assignment Operators

let x1 = 10;
let c = x1+10;
console.log(x1+c);

x1*= 10;
console.log(x1);

let j=5;
j+=5;
console.log(j);

// Comparision Operators

let a = 10;
console.log(a>=10);

console.log(x===10); // Strict equality - type and value checks
console.log(1===1);


console.log('1' == 1); // loose equality
console.log(1==1);
console.log(true == 0);

// Ternary Operators:

let points =110;
let type = points > 90 ? 'gold': 'silver'

console.log(type);

// Logical Operators
// AND (&&) 

let highincome = false;
let creditscore = true;
let eligbility = highincome && creditscore;
console.log(eligbility);


// OR (||)

let highincome1 = false;
let creditscore1 = true;
let eligbility1 = highincome1 || creditscore1;
console.log(eligbility1);

// NOT (!)

let isActive = true;
console.log('Is Active State'+ !isActive);
console.log(!(10<5));

// LOGICAL OPERATOR WITH NON BOOLEAN OPERATORS
// falsy(false)
//undefined
//null
//0
//false
//''
//NaN
//turthy values : which are not false
console.log(false || 'Martha');
console.log(false || 0);
console.log(false || 1 || 2);
console.log(false || undefined);
console.log(true || null);

let usercolor = 'red';
let defaultcolor ='blue';
let currentcolor = usercolor || defaultcolor;
console.log(currentcolor);


//Bitwise Operator:
//1 = 00000001
//2 = 00000002

console.log(1|2);
console.log(1&2);

// OPERATTOR PRECEDENCE

console.log(2+3*4); // * will be given higher precedence
console.log((2+3)*4);

// Swaping Two Values

let aa1 = 10;
let b =20;
let ccc = aa1;
aa1 = b;
b = ccc;
console.log(aa1);
console.log(b);



