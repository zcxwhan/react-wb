import {combineReducers} from "redux";

import home from "./home/reducer";
import mine from "./mine/reducer";
import cars from "./cars/reducer";
import citys from "./citys/reducer";
let reducer=combineReducers({
    home,mine,cars,citys
});
export default reducer;