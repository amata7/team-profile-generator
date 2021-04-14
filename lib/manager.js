const Employee = require('./employee');

class Manager extends Employee {
    constructor(officenumber) {

      super(name, ID, email);
  
      this.officenumber = officenumber;
    }
    getRole() {
        return 'Manager';
    }
  }