class Character {
    constructor(firstName, lastName, birthplace, age, virtue) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthplace = birthplace;
        this.age = age;
        this.virtue = virtue;
    }

    basicInfo() {
        return `Character ${this.firstName} ${this.lastName} from ${this.birthplace} is ${this.age} years old.`
    }

    quote() {
        return `${this.firstName} says: "${this.virtue}"`
    }
    
    underage(){
        if (this.age >= 18) {
            return `${this.firstName} is not underage.`;
        } else {
            return `${this.firstName} is underage.`
        }
    }
}

class Task extends Character {
    constructor(firstName, lastName, birthplace, age, virtue, job, weapons) {
        super(firstName, lastName, birthplace, age, virtue)
        this.job = job;
        this.weapons = weapons;
    }

    task() {
        return `${this.firstName} is ${this.job} and uses ${this.weapons}`
    }
}

console.log(basicInfo());