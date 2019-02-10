import moment from "moment";

export default class Question {
  constructor(id, userId, text, categories, createdAt = moment()) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.categories = categories;
    this.createdAt = createdAt;
    this.points = Math.floor(Math.random() * 5);
  }
}
