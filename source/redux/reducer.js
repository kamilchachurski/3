import { combineReducers } from "redux";

import homeReducer from "features/home/posts/redux/reducer";

const reducer = combineReducers({ homeReducer });

export default reducer;