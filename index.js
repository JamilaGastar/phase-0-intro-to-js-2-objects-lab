// Write your solution in this file!
let employee = {
    name: "Jamila",
    streetAddress: "Alexandra Street",
}
console.log(employee);

let newEmployee;

function updateEmployeeWithKeyAndValue(employee, key, value) {
    newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee[key]=value;
    return newEmployee;
}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));
console.log(newEmployee);
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee[key]= value;
    return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"));
console.log(employee);

let modifiedEmployee;

function deleteFromEmployeeByKey(newEmployee, key) {
    modifiedEmployee = {...newEmployee};
    delete modifiedEmployee[key];
    return modifiedEmployee;
}
console.log(deleteFromEmployeeByKey(newEmployee, "name"));
console.log(modifiedEmployee);
console.log(newEmployee);
    
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));
console.log(employee);