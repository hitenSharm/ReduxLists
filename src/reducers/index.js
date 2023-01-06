import { combineReducers } from "redux";
import getUsersAll from "./allData";
import { cardInfo } from "./cardData";

const allReducers = combineReducers({
  allUsers: getUsersAll,
  cardUpdater:cardInfo
});

export default allReducers;
