const Engineer = require("../lib/Engineer");

test("Can set GitHub via constructor", () => {
    const gitHub = "GitHubProfile";
    const newEmployee = new Engineer("name", 10, "test@test.com", gitHub);
    expect(newEmployee.gitHub).toEqual(gitHub);
  });

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const newEmployee = new Engineer("name", 10, "test@test.com", "GitHubProfile");
    expect(newEmployee.getRole()).toEqual(testValue);
});

test("Can get GitHub via getGitHub()", () => {
    const testValue = "GitHubUser";
    const newEmployee = new Engineer("name", 10, "test@test.com", testValue);
    expect(newEmployee.getGitHub()).toEqual(testValue);
  });
  