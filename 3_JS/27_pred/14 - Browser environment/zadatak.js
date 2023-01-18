//1
console.log(`Širina: ${window.innerWidth}`);
console.log(`Visina: ${window.innerHeight}`);

//2
console.log(window.location.hostname);
window.location = 'https://www.google.com';

//3
window.confirm('Do you accept cookies?');

//4
let userName = prompt('What is your name?');
window.setTimeout(greet, 2000);
function greet() {
    alert(`Hello, ${userName}`);
}





