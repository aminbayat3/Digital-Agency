import { combineReducers } from "redux";

import positionReducer from "./position/position.reducer";
import loactionReducer from "./location/location.reducer";
import bannerReducer from "./banner/banner.reducer";
import teamReducer from "./team/team.reducer";
import clientIconsReducer from "./clientIcons/clientIcons.reducer";
import valuesReducer from "./values/values.reducer";
import sliderControllerReducer from "./sliderController/sliderController.reducer";
import offersReducer from './offers/offers.reducer';

export default combineReducers({
  position: positionReducer,
  location: loactionReducer,
  banner: bannerReducer,
  team: teamReducer,
  icons: clientIconsReducer,
  value: valuesReducer,
  slide: sliderControllerReducer,
  offer: offersReducer
});
