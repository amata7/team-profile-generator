const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {

      super(name, ID, email);
  
      this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
  }