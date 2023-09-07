const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// sllic

const sliced = arr.slice(2, 6);
// console.log(sliced);

// clone Array 

const cloned = arr.slice();
// console.log(cloned === arr);



// array Like Object to Array 
function toArray(){
    return Array.prototype.slice.call(arguments);
}

const  arrgArray = toArray(4,5,6,7,8,9 , 'maruf bellah');
console.log(arrgArray);