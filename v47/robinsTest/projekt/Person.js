export class Person{
    constructor(firstName, lastName, age, isActive, hobbies, meta){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isActive = isActive;
    this.hobbies = hobbies;
    this.meta = meta;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getInfo() {
        return this.firstName + " " + this.lastName + ", " + this.age + ", " + this.meta.role  + " och är aktiv:" + this.isActive;
        
    }
}

    