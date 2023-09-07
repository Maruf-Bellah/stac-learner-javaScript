var str = 'Some String';
var length = 0;
console.log(str.length);


while(true){
    if(str.charAt(length) == ''){
        break;
    }else{
        length++;
    }
}
console.log(length);