// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");


// Used example from file 10-OOP 24 Subclasses activity in class to form a basis 
class Engineer extends Employee {
    constructor(name,id, github) {
        super(name, id, email);
        this.github = github;
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

module.exports = Engineer;