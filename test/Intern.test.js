const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UNCC";
    const newEmployee = new Intern("Alexandra", 10, "test@test.com", testValue);
    expect(newEmployee.school).toEqual(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const newEmployee = new Intern("Alexandra", 10, "test@test.com", "UNCC");
    expect(newEmployee.getRole()).toEqual(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "UNCC";
    const newEmployee = new Intern("Alexandra", 10, "test@test.com", testValue);
    expect(newEmployee.getSchool()).toEqual(testValue);
  });