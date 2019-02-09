import moment from "moment";

export default class Question {
  constructor(id, userId, text, categories) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.categories = categories;
    this.createdAt = moment();
    this.points = 0;
  }
}
