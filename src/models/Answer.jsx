import moment from 'moment';

export default class Answer {
  constructor(id, userId, text, questionId, createdAt = moment()) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.questionId = questionId;
    this.createdAt = createdAt;
  }
}
