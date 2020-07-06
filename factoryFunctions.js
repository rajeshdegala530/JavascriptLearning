// Factory Function : it produces number of objects
// Need to create template
//should use camel case , name: camel case:oneTwoThreefour

function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log("draw");
    }
  }
}

const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();
console.log("^^^^^^^^^^^^^^^^^^^");
const c2 = createCircle(10);
console.log(c2.radius);
c2.draw();
