export class Person{
    constructor(firstName, lastName, age, isActive, hobbies, meta){
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
    this.isActive = true;
    this.hobbies = [];
    this.meta = {role: "student", country: "Sweden"};
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getInfo() {
        return this.firstName + " " + this.lastName + ", " + this.age + ", " + this.meta.role  + "och är aktiv:" + this.isActive;
        
    }
}
    