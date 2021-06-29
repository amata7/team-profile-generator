const Employee = require("./employee");

class Manager extends Employee {
  constructor(empName, id, email, officeNum) {
    super(empName, id, email);

    this.officeNum = officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
