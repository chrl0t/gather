const { checkIfVeg } = require("../utils/check-if-veg");

describe("checkIfVeg()", () => {
  it("should return vegan if vegan is in passed array", () => {
    const input = ["Vegan", "Vegetarian", "Pescatarian", "Gluten-Free"];
    const output = checkIfVeg(input);
    const expectedOutput = "Vegan";
    expect(output).toEqual(expectedOutput);
  });
  it("should return vegetarian if vegetarian is in passed array", () => {
    const input = ["Vegetarian", "Pescatarian", "Gluten-Free", "Wheat-Free"];
    const output = checkIfVeg(input);
    const expectedOutput = "Vegetarian";
    expect(output).toEqual(expectedOutput);
  });
  it("should return no if neither vegan or vegetarian are in passed array", () => {
    const input = ["Pescatarian", "Gluten-Free", "Wheat-Free"];
    const output = checkIfVeg(input);
    const expectedOutput = "No";
    expect(output).toEqual(expectedOutput);
  });
});
