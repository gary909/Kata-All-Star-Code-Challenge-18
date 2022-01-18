function strCount(str, letter){  
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == letter) {
            count++;
        }
    }
    return count;
}

console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0