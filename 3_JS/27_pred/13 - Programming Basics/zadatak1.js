function toCelsius() {
    let cels;
    let fahr = prompt(`Enter temperature (F):`);
    cels = 5 / 9 * (fahr - 32);
    return console.log(`${fahr}ºF equals to ${cels.toFixed(2)}ºC`);
}

toCelsius();