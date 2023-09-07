/* function add(a , b){
    var result = a + b;
    console.log(result);
}

// add(20, 10);
// add(15, 5);

function sub(a , b){
    var result = a - b;
    console.log(result);
}
// sub(15, 6)

*/

var arr = [1, 5, 6];
var arr2 = [1, 5, 16];
var arr3 = [1, 15, 6];
var arr4 = [10, 5, 6];
/*
var sum = 0;
for(var i = 0; i < arr.length ; i++){
    sum += arr[i];
}
console.log(sum);

var sum2 = 0;
for(var i = 0; i < arr2.length; i++){
    sum2 = sum2 + arr2[i];
}
console.log(sum2);

var sum3 = 0;
for( var i = 0; i < arr3.length; i++){
    sum3 += arr3[i];
}
console.log(sum3);


var sum4 = 0;
for(var i = 0; i < arr4.length; i++){
    sum4 += arr4[i];
}

console.log(sum4); */


function sumOfArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

sumOfArray(arr)
sumOfArray(arr2)
sumOfArray(arr3)
sumOfArray(arr4)
