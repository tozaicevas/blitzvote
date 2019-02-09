import moment from "moment";

export default class Question {
  categories = [];
  
  constructor(id, userId, text, categories) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.answers = answers;
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

  set categories(newCats) {
    this.categories.splice(0, this.categories.length);
    newCats.forEach(c => this.categories.push(c));
  }
}
