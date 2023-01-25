"use strict";

// 1.
var a = 78;
var b = 034;
var myObject = {
  property1: 1,
  property2: 2,
  property1: 1
};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [...users, user];
console.log(allUsers);

// 3.
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log('The number is ' + i);
  }, 1000);
}

console.log(i);

// let vraca brojeve od 1 do 10, a zadnji i is not defined jer je zadnja linija van scopea, a var vraca na kraju broj 10 i 10 nakon 1 sekunde
