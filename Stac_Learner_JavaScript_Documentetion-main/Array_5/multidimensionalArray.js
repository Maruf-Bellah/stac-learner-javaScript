var arr = [
    [78, 98, 98, 87],
    [98, 78, 85, 85],
    [85, 98, 95, 91],
];

// console.log(arr[0][0]);
// console.log(arr[1][1]);

/* for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
} */


// 2 dimensional array 
for(var i = 0; i < arr.length; i++){
    for(var j = 0; j<arr[i].length; j++){
        // console.log('Element' + ' ' + i + ' ' + ' ' + arr[i][j]);
    }
}

// 3 dimensional array 

var arr2 =[
    [
        [78, 98, 85, 90, 65],
        [87, 86, 80, 97, 95],
        [85, 98, 90, 87, 81],
        [81, 87, 85, 98, 91],
    ],
];

for(var i = 0; i < arr2.length ; i++){
    for(var j = 0; j < arr2[i].length; j++){
        for(var h = 0; h < arr2[i][j].length; h++){
            console.log('Element' + '  ' + i +' ' + arr2[i][j][h]);
        }
    }
}