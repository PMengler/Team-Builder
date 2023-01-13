const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

Engineer.getName();
Engineer.getEmail();
Engineer.getId();
Engineer.getGithub();
Engineer.getRole();