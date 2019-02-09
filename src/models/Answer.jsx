import UserRepository from "../repositories/UserRepository";

export default class Answer {
  constructor(id, userId, text, questionId) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.questionId = questionId;
  }

  get user() {
    return UserRepository.getAll().find(user => user.id === this.userId);
  }
}
