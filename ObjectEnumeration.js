// Enumerating properties of an object 
// get all properties of an object
//Check a property of an object True of False

const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

// for - in Loop

for(let key in circle){
    console.log(key, circle[key]);
}
console.log('---------------------------------------')

// for of loop // Arrays
for(let key of Object.keys(circle))
{
    console.log(key);
}
console.log('---------------------------------------')
for(let entry of Object.entries(circle))
{
    console.log(entry);
}

// In Operator: // Check a Property in an object
if('radius' in circle){
    console.log('yes')
}
console.log('---------------------------------------')
if('color' in circle)    console.log('yes');else console.log('No')
    
console.log('---------------------------------------')
if('draw' in circle)
console.log('yes')