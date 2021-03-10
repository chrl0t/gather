export const determineSeason = (month) => {
  let season = "";
  if (month === 11 || month === 0 || month === 1) {
    season += "Winter";
  } else if (month === 2 || month === 3 || month === 4) {
    season += "Spring";
  } else if (month === 5 || month === 6 || month === 7) {
    season += "Summer";
  } else if (month === 8 || month === 9 || month === 10) {
    season += "Autumn";
  }
  return season;
};
