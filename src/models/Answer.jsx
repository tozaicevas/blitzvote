import moment from 'moment';

export default class Answer {
  constructor(id, userId, text) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.createdAt = moment();
  }
}
