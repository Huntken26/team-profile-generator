// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

const Employee = require("./Employee");

// Used example from file 10-OOP 24 Subclasses activity in class to form a basis 
class Manager extends Employee {
    constructor(name,id, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
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


module.exports = Manager;