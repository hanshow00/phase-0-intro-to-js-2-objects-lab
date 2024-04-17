// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to update an employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function to destructively update an employee object with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from an employee object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key-value pair from an employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage:
console.log("Original employee:", employee);

// Update employee non-destructively
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log("Updated employee (non-destructive):", updatedEmployee);

// Original employee remains unchanged
console.log("Original employee after non-destructive update:", employee);

// Destructively update employee
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
console.log("Updated employee (destructive):", employee);

// Delete key-value pair non-destructively
const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without streetAddress (non-destructive):", employeeWithoutAddress);

// Original employee remains unchanged
console.log("Original employee after non-destructive deletion:", employee);

// Destructively delete key-value pair
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee after destructive deletion:", employee);