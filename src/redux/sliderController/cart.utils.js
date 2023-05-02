export const setNextSlide = (prevSlide) => {
  if (prevSlide < 6) {
    return prevSlide + 1;
  } else {
    return prevSlide;
  }
};

export const setPreviousSlide = (prevSlide) => {
    if (prevSlide > 0) {
        return prevSlide -1;
      } else {
        return prevSlide;
      }
}
