function add() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i <arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(5,5,5));