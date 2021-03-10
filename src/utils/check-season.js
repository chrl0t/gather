export const determineSeason = (month) => {
  let season = "";
  if (passedMonth === 11 || passedMonth === 0 || passedMonth === 1) {
    season += "Winter";
  } else if (passedMonth === 2 || passedMonth === 3 || passedMonth === 4) {
    season += "Spring";
  } else if (passedMonth === 5 || passedMonth === 6 || passedMonth === 7) {
    season += "Summer";
  } else if (passedMonth === 8 || passedMonth === 9 || passedMonth === 10) {
    season += "Autumn";
  }
  return season;
};
