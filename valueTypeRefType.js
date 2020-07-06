// Primitive Type 
// Number type, String, Boolean, Symbol and undefined and null

let x = 10;
y =x;
x = 20;
console.log(x)
console.log(y) // X is pointing to latest value and Y is pointing to the initial value
console.log('--------------------------------------------------')

// Reference type - Object, Function, Array - Non Primitive

let p = {
    value: 10
};
let q =p;
p.value = 20;
console.log(p.value);
console.log(q.value); // both p and q ponting to the object reference.