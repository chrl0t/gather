export const checkIfVeg = (healthLabelsArray) => {
  if (healthLabelsArray.includes("Vegan")) {
    return "Vegan";
  } else if (healthLabelsArray.includes("Vegetarian")) {
    return "Vegetarian";
  } else {
    return "No";
  }
};
