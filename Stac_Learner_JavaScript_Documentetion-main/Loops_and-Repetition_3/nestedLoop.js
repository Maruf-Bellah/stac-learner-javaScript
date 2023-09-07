// nested loop একটা looper মধ্যে অন্য আরেকটা loop থাকাকে nested loop 

for(var i = 1 ; i <= 5; i++){
    var result = ' ';
    for(var j = 1; j <= i; j++){
        result += j + ' ';
    }
    console.log(result);
}


var n = 10;
for(var a = 1; a <= n; a++){
    var result = '';
    for(var b = 1; b <= n; b++){
        result += '* '
    }
    console.log(result);
}