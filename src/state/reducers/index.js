import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import questions from './questions';
import parties from './parties';
import categories from './categories';
import answers from './answers';
import users from './users';

export default (history) => combineReducers({
  router: connectRouter(history),
  questions,
  parties,
  categories,
  answers,
  users
});