// also used to create objects
//Name: pascal notation: OneTwoThreeFour

function circle(radius){

    this.radius=radius;
    this.draw = function(){
        console.log('draw', radius);
    }

}
// How to call constructor function: to use new keyword

const a = new circle(1)
console.log(a)
console.log(a.radius)
a.draw();