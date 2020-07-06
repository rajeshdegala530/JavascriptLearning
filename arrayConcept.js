const number = [45,56,7]
console.log(number)
console.log(number.length)
console.log(number[2])
console.log('---------------')

// Add an element at end of the array
number.push(8,10)
console.log(number);
console.log('---------------')

// add an element at the start of array
number.unshift(1,2)
console.log(number);
console.log('---------------')

// add an element at middle of the array

number.splice(3,0,'a','b')
console.log(number)
console.log('---------------')

// Printing all the values from an array:
for(const key in number){
    const element = number[key];
    console.log(element)
}
console.log('---------------')

// find elements in array:(primitive)
const s = [2,1,3,1,5]
console.log(s.indexOf(1))
console.log(s.indexOf(5))
console.log(s.indexOf(1,1))
console.log(s.indexOf(1, s.indexOf(1)+1))
console.log(s.indexOf(3)!==1)
console.log(s.includes(3))
console.log(s.includes('a'))
console.log('---------------')

// find elements in arry : reference Type.

const courses = [
    {id:1, name: 'Mathematics'},
    {id:2, name:'Physics'}
]
console.log(courses.includes({id:1, name: 'Mathematics'}))
const c1 = courses.find(function(course){
   return course.name==='Physics'
   // return course.name ==='History'
})
console.log(c1)
console.log(c1.name)
console.log(c1.id)

const c2 = courses.findIndex(function(course){

    return course.name==='Mathematics'
})

console.log(c2)

// Removing array elements:
let num = [1,2,3,4,5]

// END
const last = num.pop()
console.log(num)
console.log(last)

//Beggining:

const first = num.shift()
console.log(num)
console.log(first)

// Middle

num.splice(2,1) 
num.splice(2)
console.log(num)

// Making the Blank Array

num =[]
console.log(num)

//Using Length

num.length = 0;
console.log(num)
//Using Splice
num.splice(0,num.length)
console.log(num)



 // Using Pop method
 while(num.length>0)
 num.pop();
 console.log(num)