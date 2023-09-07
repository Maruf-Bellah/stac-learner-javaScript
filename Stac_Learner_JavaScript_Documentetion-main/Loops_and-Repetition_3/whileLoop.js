// while loop এ মুলত একটা condition থাকে যতক্ষন না সেটা সত্য হবে ততক্ষন চলতে থাকবে 

var num = 0;
while(num <= 10){
    // console.log(num + ' ' + ' this is a while loop');
    num++
}


var isRuning = true;
while(isRuning){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 9){
        console.log('winner winner you have undrastand the loop ');
        isRuning = false
    }else{
        console.log('You have got' + ' ' + rand);
    }
}


var isTrue = true;

while(isTrue){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 5){
        console.log('you have got and you are winner');
        isTrue = false
    }else{
        console.log('yeah tray again' + ' ' + rand);
    }
}