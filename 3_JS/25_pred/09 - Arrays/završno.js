let names = ['John', 'Jane', 'Bob', , 'Mike'];

//1
for (let i = 0; i < names.length; i++) {
    console.log('Imena u nizu su: ' + names[i]);
}

//2
names.push('Sanja');

//3
for (let i = 0; i < names.length; i++) {
    console.log('Imena u nizu su: ' + names[i]);
    if (names[i] == 'Jane') {
        break;
    }
}

//4
names = names.filter(name => name != undefined);