import { combineReducers } from "redux";
import gameDetailsReducer from "./gameDetailsReducer";
import { gamesReducer } from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
  // cart removed
});

export default rootReducer;
