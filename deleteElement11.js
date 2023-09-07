const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// remvoe first Element ==================
// numbers.shift()

// remove last element ===================
// numbers.pop()
// numbers.length = numbers.length -1;

// remove inside Element - splice using idenx
// numbers.splice(2, 5)

// remove Inside Element - splice using value
const toBeDeleted = 8;

/* for(let i =0; i < numbers.length; i++){
    if(numbers[i] === toBeDeleted){
        numbers.splice(i, 1)
    }
} */
// console.log(numbers);

// Filter Array ব্যবহার করে delete করা
const number = numbers.filter((value) => value !== toBeDeleted);

// Delete Operator
// numbers[1] = undefined;
// delete numbers[1]

// Reset Whole Array

let x = [1, 2, 3];
let y = x;
x = [];

// Alternative

let xx = [1, 2, 3];
let yy = xx ;
xx.length = 0;

console.log(xx, yy);
