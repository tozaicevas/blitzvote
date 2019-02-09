import moment from 'moment';

export default class Question {
  constructor(id, userId, text, categories, answers) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.categories = categories;
    this.answers = answers;
    this.createdAt = moment();
  }
}
