const { mutateName } = require("../utils/mutate-name");

describe("mutateName()", () => {
  it("should return a string", () => {
    const input = "Nettle";
    const output = mutateName(input);
    expect(typeof output).toBe("string");
  });
  it("should return a string in all lowercase", () => {
    const input = "Nettle";
    const output = mutateName(input);
    expect(output === input.toLowerCase()).toBe(true);
  });
  it("should return two worded strings as two words separated by +", () => {
    const input = "Wild Garlic";
    const output = mutateName(input);
    const expectedOutput = "wild+garlic";
    expect(output).toEqual(expectedOutput);
  });
});
