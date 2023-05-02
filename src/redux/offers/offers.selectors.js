import { createSelector } from "reselect";

const selectOffers = (state) => state.offer;

export const selectOffer = createSelector(
  [selectOffers],
  (offer) => offer.offerData
);
