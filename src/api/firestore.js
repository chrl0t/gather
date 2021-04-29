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

export const postFavouriteForage = (forage) => {
  const { name, image } = forage;
  db.collection("saved-forages").add({
    name: name,
    image: image
  });
};

export const postFavouriteRecipe = (title, image, url, healthLabel) => {
  db.collection("saved-recipes").add({
    title: title,
    image: image,
    url: url,
    healthLabel: healthLabel
  });
};
