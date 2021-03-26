const { mutateName } = require("./mutate-name");

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
});
