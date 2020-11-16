var num = parseInt(process.argv[2]);
var array = new Array();
while (num % 2 == 0) {
    array.push(2);
    num /= 2;
}
for (let i = 3; i * i <= num; i += 2) {
    while (num % i == 0) {
        array.push(i);
        num /= i;
    }
}
if (num > 2) {
    array.push(num);
}
console.log("Prime factors are : [" + array+ "]");