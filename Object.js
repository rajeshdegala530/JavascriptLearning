// vars and functions can be defined in an object
// should write key: value pair format

const circle = {
    radius: 1,
    isVisible: true,
    location : {
        x: 1,
        y: 1
    },


    draw: function () {
        console.draw('draw');
    }
}
console.log(circle.radius)
console.log(circle)