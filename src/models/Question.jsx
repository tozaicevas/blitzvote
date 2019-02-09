import moment from 'moment';
import AnswerRepository from '../repositories/AnswersRepository';
import UserRepository from '../repositories/UserRepository';
import CategoriesRepository from '../repositories/CategoriesRepository';

export default class Question {
  constructor(id, userId, text, categories) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.categories = categories;
    this.createdAt = moment();
  }

  get answers() {
    return AnswerRepository.getAll()
      .filter(answer => answer.id );
  }

  get user() {
    return UserRepository.getAll()
      .find(user => user.id === this.userId);
  }

  get categories() {
    return CategoriesRepository.getAll();
  }
}
