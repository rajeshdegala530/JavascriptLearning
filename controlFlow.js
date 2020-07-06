//if else
//switch case

// 6 am to 12 pm - Good Morning
//12-6pm - Good Afternoon
//else - Good Evening

/*  let hour = 12;
if(hour>=6 && hour<12)
{
    console.log('good morning');

}
else if(hour>=12 && hour<=18)
{
    console.log('good afternoon')
}
else {
    console.log('good evening')
}  */
// 6 am to 12 pm - Good Morning
//12-6pm - Good Afternoon
//else - Good Evening

let hour = 21;
if (hour >= 6 && hour < 12) console.log("good morning");
else if (hour >= 12 && hour <= 18) console.log("good afternoon");
else console.log("good evening");

// find the maximum number:

let a = 500;
let b = 600;
let c = 400;

if (a > b && a > c) {
  console.log("a is the greatest");
} else if (b > c) {
  console.log("b is the greatest");
} else console.log("c is the greatest");

// Switch Case Statement:

let role = "Admin";

switch (role) {
  case "guest":
    console.log("guest user");
    break;
  case "Admin":
    console.log("Admin user");
    break;
  case "Vendor":
    console.log("vendor User");
    break;
  default:
    console.log("No user");
}

// role with if else

if (role ==='guest') console.log("Guest User")
else if(role ==='Vendor') console.log("Vendor user")
else if(role ==='Admin') console.log("Admin User")
else console.log("No User")
