import { expect } from "chai";
import * as PasswordStrength from "PasswordStrength";

describe("PasswordStrength", () => {
    it("should be 18 for qwerty", () => {
        const expected = 18;
        const password = "qwerty";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should be 42 for 123456", () => {
        const expected = 42;
        const password = "123456";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should be 84 for qwerty123456", () => {
        const expected = 84;
        const password = "qwerty123456";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should be 144 for qwerty123456QWERTY", () => {
        const expected = 144;
        const password = "qwerty123456QWERTY";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should be 84 for 123456QWERTY", () => {
        const expected = 84;
        const password = "123456QWERTY";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should be 18 for QWERTY", () => {
        const expected = 18;
        const password = "QWERTY";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should get 29 for abcd1a", () => {
        const expected = 29;
        const password = "abcd1a";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });

    it("should be 14 for abcda", () => {
        const expected = 14;
        const password = "abcda";
        expect(PasswordStrength.getStrengthLevel(password)).to.equal(expected);
    });
});
