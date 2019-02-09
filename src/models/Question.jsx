export default class Question {
  constructor(id, userId, text, categories, answers, createdAt) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.categories = categories;
    this.answers = answers;
    this.createdAt = createdAt;
  }
}
