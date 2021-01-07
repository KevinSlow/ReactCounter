import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";



export let reducers = combineReducers({
    counter: counterReducer
});

export type ReduxState = ReturnType<typeof reducers>;

const store = createStore(
    reducers,
    // composeWithDevTools(
    //     applyMiddleware(thunkMiddleware)
    //     // other store enhancers if any
    // )
);
// @ts-ignore
window.store = store;

export default store;
