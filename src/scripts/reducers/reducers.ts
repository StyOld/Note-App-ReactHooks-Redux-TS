import {combineReducers} from 'redux';
import reducerTags from './reducerTags';

const reducers = combineReducers({
    tags: reducerTags,
});

export default reducers;