import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducer';

const thunkMiddleWare = applyMiddleware(thunk);

// Adding the reducer of the app inside the store
const setStore = createStore(Reducer, thunkMiddleWare);

export default setStore;