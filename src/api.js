import { db } from "./firebase/config";

export async function fetchListOfForages(season, setForages, setLoading) {
  const foragesRef = db.collection("forages").where(season, "==", true);
  const snapshot = await foragesRef.orderBy("excitement").get();
  const fetchedForages = [];
  snapshot.forEach((doc) => {
    const forage = doc.data();
    fetchedForages.push(forage);
    return fetchedForages;
  });
  setForages(fetchedForages);
  setLoading(false);
}

export async function fetchForage(
  id,
  setName,
  setLatin,
  setDescription,
  setIdentification,
  setImage
) {
  const foragesRef = db.collection("forages").where("id", "==", id);
  const snapshot = await foragesRef.get();
  let forageInfo = {};
  snapshot.forEach((doc) => {
    forageInfo = doc.data();
  });
  setName(forageInfo.name);
  setLatin(forageInfo.latin);
  setDescription(forageInfo.description);
  setIdentification(forageInfo.identification);
  setImage(forageInfo.mainimage);
}
