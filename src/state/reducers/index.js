import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import questions from './questions';
import parties from './parties';

export default (history) => combineReducers({
  router: connectRouter(history),
  questions,
  parties
});