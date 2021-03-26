const { mutateName } = require("./mutate-name");

describe("mutateName()", () => {
  it("should return a string", () => {
    const input = "Nettle";
    const output = mutateName(input);
    expect(typeof output).toBe("string");
  });
});
