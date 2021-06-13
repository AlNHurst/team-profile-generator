const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const newEmployee = new Manager("Alexandra", 10, "test@test.com", testValue);
    expect(newEmployee.officeNumber).toEqual(testValue);
});

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const newEmployee = new Manager("Alexandra", 10, "test@test.com", 100);
    expect(newEmployee.getRole()).toEqual(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const newEmployee = new Manager("Alexandra", 10, "test@test.com", testValue);
    expect(newEmployee.getOfficeNumber()).toEqual(testValue);
});
