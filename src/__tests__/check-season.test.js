const { determineSeason } = require("../utils/check-season");

describe("determineSeason()", () => {
  it("should return winter if a winter month is passed in", () => {
    const input = 0;
    const output = determineSeason(input);
    const expectedOutput = "Winter";
    expect(output).toEqual(expectedOutput);
  });
  it("should return spring if a spring month is passed in", () => {
    const input = 2;
    const output = determineSeason(input);
    const expectedOutput = "Spring";
    expect(output).toEqual(expectedOutput);
  });
  it("should return summer if a summer month is passed in", () => {
    const input = 5;
    const output = determineSeason(input);
    const expectedOutput = "Summer";
    expect(output).toEqual(expectedOutput);
  });
  it("should return autumn if a autumn month is passed in", () => {
    const input = 8;
    const output = determineSeason(input);
    const expectedOutput = "Autumn";
    expect(output).toEqual(expectedOutput);
  });
});
