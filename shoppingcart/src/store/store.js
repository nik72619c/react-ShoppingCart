import { Productreducer } from "../reducers/productreducer";
import {createStore,combineReducers} from 'redux';
import {Cartreducer} from '../reducers/cartReducer';
export const store=createStore(combineReducers({Productreducer,Cartreducer}));
console.log("main store",store);