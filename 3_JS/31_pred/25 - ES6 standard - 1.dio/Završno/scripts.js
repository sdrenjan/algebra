"use strict";

// 1.
a = 78;
b = 034;
myObject = { property1: 1, property2: 2, property1: 1 };

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [...users, user];
console.log(allUsers);

// 3.
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('The number is ' + i);
  }, 1000);
}

console.log(i);

// let vraca i is not defined jer je zadnja linija van scopea, a var vraca 10 (i to ispisano 10 puta number is 10 zbog delaya)
