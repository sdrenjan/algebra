class Character {
    constructor(firstName, lastName, birthplace, age, gender, virtue) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthplace = birthplace;
        this.age = age;
        this.gender = gender;
        this.virtue = virtue;
    }

    basicInfo() {
        return `Character ${this.firstName} ${this.lastName} from ${this.birthplace} is ${this.age} years old.`
    }

    quote() {
        return `${this.firstName} says: "${this.virtue}"`
    }

    gender() {
        if (this.gender == 
    }
}

class Task extends Character {
    constructor(firstName, lastName, birthplace, age, gender, virtue, job, weapons) {
        super(firstName, lastName, birthplace, age, gender, virtue)
        this.job = job;
        this.weapons = weapons;
    }

    task() {
        return `${this.firstName} is ${this.job} and uses ${this.weapons}`
    }
}