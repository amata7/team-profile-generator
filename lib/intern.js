const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(empName, id, email);

    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
