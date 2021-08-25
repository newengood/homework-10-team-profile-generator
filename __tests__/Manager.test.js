const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Object", () => {
        it("creates an Manager object", () => {
            const manager = new Manager ("test employee", 50, "test@gmail.com", 500);

            expect(manager.name).toBe("test employee");
            expect(manager.id).toEqual(50);
            expect(manager.email).toBe("test@gmail.com");
            expect(manager.officeNumber).toBe(500);
        })
    })
    describe("getofficeNumber", () => {
        it("returns the managers office number", () => {
            const manager = new Manager ("test employee", 50, "test@gmail.com", 500);

            expect(manager.getofficeNumber()).toBe(500);
        })
    })
    describe("getRole", () => {
        it("returns the manager's role", () => {
            const manager = new Manager ("test employee", 50, "test@gmail.com", 500);

            expect(manager.getRole()).toBe("manager");
        })
    })
})