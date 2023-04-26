const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 70 for 31 + 39", () => {
            expect(addition(31, 39)).toBe(70);
        });
    });
    describe("Subtract function", () => {
        test("should return 3 for 7 - 4", () => {
            expect(subtract(7, 4)).toBe(3);
        });
    });
    describe("Multiply function", () => {
        test("should return 20 for 5 * 4", () => {
            expect(multiply(5, 4)).toBe(20);
        });
    });
    describe("Divide function", () => {
        test("should return 6 for 30 / 5", () => {
            expect(divide(30, 5)).toBe(6);
        });
    });
});