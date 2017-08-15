import { combineReducers } from 'redux';
import twitterReducer from './twitter_reducer'

const rootReducer = combineReducers({
  tweets: twitterReducer
});

export default rootReducer
