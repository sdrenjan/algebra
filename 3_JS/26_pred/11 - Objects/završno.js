let auto = {
    brand: {
        manufacturer: 'Tesla',
        model: 'X'
    },
    range: 576,
    acceleration: 3.9,
    topSpeed: 250,
    weight: 2.352,
    travelTime: function () {
        return this.range / this.topSpeed;
    },
    carName: function () {
        return `${this.brand.manufacturer} ${this.brand.model}`;
    },
    gasCommand: function (gas) {
        if (gas === true) {
            return 'Car is accelerating';
        }
        else {
            return 'Car is going at constant speed';
        }
    }
}

console.log(`Trajanje puta pri maksimalnoj brzini: ${auto.travelTime()} h`);
console.log(`Naziv auta: ${auto.carName()}`);
console.log(auto.gasCommand(true));
console.log(`Svojstva - domet: ${auto.range}km, ubrzanje (0-100/s): ${auto.acceleration}s, maksimalna brzina: ${auto.topSpeed}km/h, težina: ${auto.weight}t`);

let autoJson = JSON.stringify(auto);
console.log(autoJson);

let imena = Object.keys(auto);
let vrijednosti = Object.values(auto);
for (let i = 0; i < vrijednosti.length; i++) {
    if (vrijednosti.propertyIsEnumerable(i) === true) {
        console.log(`${imena[i]} ${vrijednosti[i]} ${vrijednosti.propertyIsEnumerable(i)}`);
    }
}