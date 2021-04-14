const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {

      super(name, ID, email);
  
      this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
  }