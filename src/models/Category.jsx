import QuestionRepository from "../repositories/QuestionRepository";

export default class Category {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  get questions() {
    return QuestionRepository.getAll()
      .filter(question => question.categories.includes(this.id));
  };
}
