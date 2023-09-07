// brack statement কোন কিছু কে breack করার জন্য ব্যবহার হয় 

while(true){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 8){
        console.log('hey i got 8');
        break
    }else{
        console.log('hey i am a break ' + rand);
    }
}

for(var i = 1; i <= 10; i++){
   if(i % 5 == 4){
        break
   }else{
    console.log('hey whats up bro breck miya ' + i);
   }
}