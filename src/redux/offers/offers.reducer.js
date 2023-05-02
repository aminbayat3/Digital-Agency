import OFFERS_DATA from "./offers.data";

const INITIAL_STATE = {
  offerData: OFFERS_DATA,
};

const offersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default offersReducer;
