import { db } from "../firebase/config";

export async function fetchListOfForages(season) {
  const foragesRef = db.collection("forages").where(season, "==", true);
  const snapshot = await foragesRef.orderBy("excitement").get();
  const fetchedForages = [];
  snapshot.forEach((doc) => {
    const forage = doc.data();
    fetchedForages.push(forage);
  });
  return fetchedForages;
}

export async function fetchForage(id) {
  const foragesRef = db.collection("forages").where("id", "==", id);
  const snapshot = await foragesRef.get();
  let forageInfo = {};
  snapshot.forEach((doc) => {
    forageInfo = doc.data();
  });
  return forageInfo;
}

export async function fetchListOfSavedForages() {
  const foragesRef = db.collection("saved-forages");
  const snapshot = await foragesRef.get();
  const fetchedForages = [];
  snapshot.forEach((doc) => {
    const forage = doc.data();
    fetchedForages.push(forage);
  });
  return fetchedForages;
}

export async function fetchListOfSavedRecipes() {
  const recipesRef = db.collection("saved-recipes");
  const snapshot = await recipesRef.get();
  const fetchedRecipes = [];
  snapshot.forEach((doc) => {
    const recipe = doc.data();
    fetchedRecipes.push(recipe);
  });
  return fetchedRecipes;
}

export const postFavouriteForage = (forage) => {
  const { name, availability, locations, warnings, image } = forage;
  const postForage = () => {
    db.collection("saved-forages").add({
      name,
      availability,
      locations,
      warnings,
      image
    });
  };
  const checkForages = async () => {
    const forages = await fetchListOfSavedForages();
    if (forages.filter((item) => item.name === name).length > 0) {
      return null;
    } else {
      postForage();
    }
  };
  checkForages();
};

export const postFavouriteRecipe = (title, image, url, healthLabel) => {
  const postRecipe = () => {
    db.collection("saved-recipes").add({
      title,
      image,
      url,
      healthLabel
    });
  };
  const checkRecipes = async () => {
    const recipes = await fetchListOfSavedRecipes();
    if (recipes.filter((item) => item.title === title).length > 0) {
      return null;
    } else {
      postRecipe();
    }
  };
  checkRecipes();
};
