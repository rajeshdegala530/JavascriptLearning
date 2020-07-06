//copying one object to another

const circle = {
    radius: 1,
    draw()
    {
        console.log('draw');
    }
}
//1. for in Loop
const another = {}; // blank object
console.log(another)
for(let key in circle)
another[key]=circle[key];
console.log(another)
console.log('................................')

//2. Usin Object.assign method:
const another1 = Object.assign({},circle);
console.log(another1)

const another2 = Object.assign({
    color:'red'},circle);
console.log(another2)
another2.draw();
console.log('................................')

//3. Using Spread ... operator:
const another3 = {... circle}
console.log(another3)