const INITIAL_STATE = {
  currentText: [
    "Beyond is a design and technology agency that builds world class products for the digital age",
    "We are creative designers, insightful strategists and exceptional engineers",
    "We partner with our clients to help solve their business challenges",
    "We help our clients make better versions of themselves"
  ]
};

const bannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default bannerReducer;
