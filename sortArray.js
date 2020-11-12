var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers[i] = (Math.floor(Math.random() * 900)+ 100);
}
numbers.forEach(i => console.log(i));
numbers.sort((a,b) => a - b);
console.log("Second largest element is : " + numbers[numbers.length-2]);
console.log("Second smallest element is : " + numbers[1]);
