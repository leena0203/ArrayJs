var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers[i] = (Math.floor(Math.random() * 900)+ 100);
   }
numbers.forEach(i => console.log(i));
var max = Math.max(...numbers);
var min = Math.min(...numbers);
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == max || numbers[i] == min) {
        numbers.splice(i, 1);
        i--;
    }
}
var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);