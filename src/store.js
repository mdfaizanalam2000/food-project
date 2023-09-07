import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { restaurantReducer } from "./reducers/restaurantReducer";
import { menuReducer } from "./reducers/menuReducer";

const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer
});

let initialState = {};

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
const store = createStore(
    reducer, initialState, composeenhancers(applyMiddleware(...middleware))
);

export default store;