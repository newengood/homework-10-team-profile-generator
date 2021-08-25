const Employee = require("..Employee/lib/Employee");

decribe("Employee", () => {
    describe("Object", () => {
        it("creates an Employee object", () => {
            const employee = new Employee ("test employee", 50, "test@gmail.com");

            expect(employee.name).toBe("test employee");
            expect(employee.id).toEqual(50);
            expect(employee.email).toBe("test@gmail.com");
        })
    })
    describe("getName", () => {
        it("returns the employee name", () => {
            const employee = new Employee ("test employee", 50, "test@gmail.com");

            expect(employee.getName()).toBe("test employee");
        })
    })
    describe("getID", () => {
        it("returns the employee ID", () => {
            const employee = new Employee ("test employee", 50, "test@gmail.com");

            expect(employee.getID()).toEqual(50);
        })
    })
    describe("getID", () => {
        it("returns the employee ID", () => {
            const employee = new Employee ("test employee", 50, "test@gmail.com");

            expect(employee.getEmail()).toBe("test@gmail.com");
         })
    })
    describe("getRole", () => {
        it("returns the employee's role", () => {
            const employee = new Employee ("test employee", 50, "test@gmail.com");

            expect(employee.getEmail()).toBe("employee");
        })
    })
})