import axios from "axios";

export const fetchRecipes = (
  ingredient,
  setRecipeTitle,
  setRecipeImage,
  setRecipeLink
) => {
  return axios
    .get(
      `https://api.edamam.com/search?q=${ingredient}&app_id=df1d6767&app_key=6b2c1871ed0727f6939f433b36c752f9`
    )
    .then(({ data }) => {
      setRecipeTitle(data.hits[0].recipe.label);
      setRecipeImage(data.hits[0].recipe.image);
      setRecipeLink(data.hits[0].recipe.url);
    });
};
