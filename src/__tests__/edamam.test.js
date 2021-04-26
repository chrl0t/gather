import { fetchRecipes } from "../api/edamam";

describe("fetchRecipes()", () => {
  it("should return an array of recipes", async () => {
    const response = await fetchRecipes("chocolate");
    const firstResult = Object.keys(response[0].recipe.recipe);
    const expected = ["title", "image", "key", "url"];
    expect(firstResult).toEqual(expect.arrayContaining(expected));
  });
});
