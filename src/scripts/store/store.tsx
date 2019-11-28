import {createStore, applyMiddleware} from 'redux';
import reducers from "../reducers/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// const async = ({getState, dispatch}) => next => action => {
//     if (typeof action === 'function') {
//         action(dispatch);
//     } else {
//         return next(action);
//     }
// };

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;