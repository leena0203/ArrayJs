var array = new Array(-6, 0, 1, 5, 2, -3);
for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
            if (array[i] + array[j] + array[k] == 0) {
                console.log("Sum of elements : " + array[i] + " " + array[j] + " " + array[k] + " " + "is zero");
            }
        }
    }
}