// Dynamic nature of object in Js is that we can add or delete the properties in runtime
const circle = {
    radius: 1,
    color: 'red',
    log(){

    }
}
console.log(circle)
// Add more properties in circle object
circle.price = 100,
circle.draw = function(){
    console.log('draw')
}
console.log(circle)

// Delete properties from circle object
delete circle.price;
console.log(circle)
delete circle.draw;
console.log(circle)