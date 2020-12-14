import {createStore, combineReducers} from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({schedules: reducer}), composeWithDevTools());


export default store;