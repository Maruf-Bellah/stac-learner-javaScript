// forloop এর মধ্যে শুধু ২ টা সেমিক্লন দিলেই হয়ে যাবে; 


/* 
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

 */

for(; ;){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 9){
        console.log('you have got and you are winner');
         break
    }else{
        console.log('yeah tray again' + ' ' + rand);
    }

}