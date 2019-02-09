import QuestionRepository from "../repositories/QuestionRepository";

export default class Category {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  getAllQuestions = () => {
    return QuestionRepository.getAll().map(question =>
      question.categories.includes(this.id)
    );
  };
}
