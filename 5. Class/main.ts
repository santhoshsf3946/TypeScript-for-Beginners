export{};

class Employee {
    employeeName: string
    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log("Good morninng " + this.employeeName);
    }
}

let emp1 = new Employee('Santhosh');

console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log('Manager delegating tasks');
    }
}

let m1 = new Manager('Karthi')
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
