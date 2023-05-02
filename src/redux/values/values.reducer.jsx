import VALUES_DATA from "./values.data";

const INITIAL_STATE = {
  values: VALUES_DATA
};

const valuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default valuesReducer;
