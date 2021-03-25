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
