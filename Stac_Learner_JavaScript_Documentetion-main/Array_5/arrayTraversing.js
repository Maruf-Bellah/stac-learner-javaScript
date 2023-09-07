var arr =[4, 5, 6, 7, 9, 65, 32, 5, 6, 7, 96, 4, 56, 74];


// arry er moddhe loop chalay 2 jog kore dekha holo 

for(var i = 0; i < arr.length ; i++){
    // console.log(arr[i]);
    // arr[i] = arr[i] + 2;
    var a = arr[i] + 2
    // console.log(a);
}


// pura arry er jog fol 
var sum = 0; 
for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    // console.log(sum);
}
// console.log(sum);

// array er moddhe shudu Even / jor number gula dekhaw and er jog foll dekhaw 

var sum2 = 0;
for(var i = 0; i < arr.length ; i++){
    if(arr[i] % 2 == 0 ){
        console.log(arr[i]);
        sum2 += arr[i];
    }
}
console.log(sum2);

// array er moddhe shudhu odd / biyog number gulo dekhaw and er somosti ber kore dekhaw 

var sum3 = 0; 
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        console.log(arr[i]);
        sum3 += arr[i];
    }
}

console.log(sum3);