const Employee = require("../lib/Employee");

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const newEmployee = new Employee();
        expect(newEmployee instanceof Employee).toEqual(true);
    });

    test("Can set name via constructor arguments", () => {
        const name = "Alexandra";
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toEqual(name);
    });

    test("Can set id via constructor argument", () => {
        const testId = 10;
        const newEmployee = new Employee("name", testId);
        expect(newEmployee.id).toEqual(testId);
    });

    test("Can set email via constructor argument", () => {
        const testEmail = "test@test.com";
        const newEmployee = new Employee("name", 10, testEmail);
        expect(newEmployee.email).toEqual(testEmail);
    });

    describe("getName", () => {
        test("Can get name via getName()", () => {
            const name = "Alexandra";
            const newEmployee = new Employee(name);
            expect(newEmployee.getName()).toEqual(name);
        });
    });

    describe("getId", () => {
        test("Can get id via getId()", () => {
            const newId = 10;
            const newEmployee = new Employee("name", newId);
            expect(newEmployee.getId()).toEqual(newId);
        });
    });

    describe("getEmail", () => {
        test("Can get email via getEmail()", () => {
            const newEmail = "test@test.com";
            const newEmployee = new Employee("name", 10, newEmail);
            expect(newEmployee.getEmail()).toEqual(newEmail);
        });
    });

    describe("getRole", () => {
        test("getRole() should return \"Employee\"", () => {
            const testEmployee = "Employee";
            const newEmployee = new Employee("Alexandra", 10, "test@test.com");
            expect(newEmployee.getRole()).toEqual(testEmployee);
        });
    });
});
