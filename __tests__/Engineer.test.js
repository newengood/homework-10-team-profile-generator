const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Object", () => {
        it("creates an Engineer object", () => {
            const engineer = new Engineer ("test employee", 50, "test@gmail.com", "github");

            expect(engineer.name).toBe("test employee");
            expect(engineer.id).toEqual(50);
            expect(engineer.email).toBe("test@gmail.com");
            expect(engineer.github).toBe("github");
        })
    })
    describe("getGithub", () => {
        it("returns the engineers github", () => {
            const engineer = new Engineer ("test employee", 50, "test@gmail.com", "github");

            expect(engineer.getGithub()).toBe("github");
        })
    })
    describe("getRole", () => {
        it("returns the engineers's role", () => {
            const engineer = new Engineer ("test employee", 50, "test@gmail.com", "github");

            expect(engineer.getRole()).toBe("engineer");
        })
    })
})