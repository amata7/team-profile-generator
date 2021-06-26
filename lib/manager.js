const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNum) {
    super(empName, id, email);

    this.officeNum = officeNum;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
