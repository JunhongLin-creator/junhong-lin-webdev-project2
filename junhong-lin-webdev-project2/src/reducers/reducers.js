import { combineReducers } from 'redux';
import gameReducer from './gameReducers';

export default combineReducers({
    game: gameReducer,
})