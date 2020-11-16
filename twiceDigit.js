var array = new Array();
for(var i = 1 ; i <= 100 ; i++){
    if(i % 11 == 0){
        array.push(i);
    }
}
console.log("Digits that are repeated twice are : " + array);
