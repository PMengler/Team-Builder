const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

Intern.getName();
Intern.getId();
Intern.getEmail();
Intern.getSchool();
Intern.getRole();