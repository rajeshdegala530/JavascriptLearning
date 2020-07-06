//for//while// do-while// for ...in// for... of// infinite loop // Break and continue statement

// for loop
for (
  let i = 0;
  i <= 10;
  i++ // i - counter/loop variable, can be any another name
) {
  console.log(i);
}
// For Loop with if else
for (
  let i = 1;
  i <= 10;
  i++ // i - counter/loop variable, can be any another name
) {
  console.log(i);
  if (i % 2 == 0) console.log("This is forloop with if statement");
}

// While loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("out of while loop");

// Do While Loop
let p = 1;
do {
  console.log("Do while" + p);
  p++;
} while (p <= 10);
console.log("=============================================");

//for - in :
//for objects - fetch the value from objects

const persons = {
  name: "mark",
  age: 25,
};

for (let key in persons) // key respresent every object value properties in every iteration 
  console.log(key, persons[key]);
// Array for in loop
const colors = ['red','blue','green']; // for - in used for value in the index/position value.
for (let num in colors)
console.log(num,colors[num])

// for  - of loop - used to get the values especially from Array - the position value

for(let index of colors)
console.log(index)

// Break and Continue
let k=0;
while(k<=10)
{
    if (k===5) break;
    console.log(' the value of k is ' + k)

k++;
}