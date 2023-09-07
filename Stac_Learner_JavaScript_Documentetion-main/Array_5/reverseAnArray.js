var arr = [1, 2, 3, 4, 5, 6, 7];
/* 
for( var i = 0; i < (arr.length / 2); i++){
    var temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length - 1 - i] = temp
    // console.log(arr.reverse);
}
console.log(arr); */

// console.log(arr.reverse());


for(var j = 0; j < (arr.length / 2); j++){
    var temp = arr[j];
    arr[j] = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = temp;
}
console.log(arr);