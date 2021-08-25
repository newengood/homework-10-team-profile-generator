const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Object", () => {
        it("creates an Intern object", () => {
            const intern = new Intern ("test employee", 50, "test@gmail.com", "school");

            expect(intern.name).toBe("test employee");
            expect(intern.id).toEqual(50);
            expect(intern.email).toBe("test@gmail.com");
            expect(intern.school).toBe("school");
        })
    })
    describe("getSchool", () => {
        it("returns the interns school", () => {
            const intern = new Intern ("test employee", 50, "test@gmail.com", "school");

            expect(intern.getSchool()).toBe("school");
        })
    })
    describe("getRole", () => {
        it("returns the intern's role", () => {
            const intern = new Intern ("test employee", 50, "test@gmail.com", "school");

            expect(intern.getRole()).toBe("intern");
        })
    })
})