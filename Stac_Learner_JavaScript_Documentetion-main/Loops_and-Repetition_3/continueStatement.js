// continue মানে কোন কিছু কে ignore / skip করা কে বুজায় 

for(var i = 1; i <= 10; i++){
    if(i == 3 || i == 6){
        continue
    }else {
        console.log(i);
        break
    }
}