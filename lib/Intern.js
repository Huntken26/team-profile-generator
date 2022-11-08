// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

const Employee = require("./Employee");


// Used example from file 10-OOP 24 Subclasses activity in class to form a basis 
class Intern extends Employee {
    constructor(name, id, school) {
        super(this.name, id, email);
        this.school = school;
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;
