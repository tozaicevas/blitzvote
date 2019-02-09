import UsersRepository from '../repositories/UserRepository';

export default class Party {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  get members() {
    return UsersRepository.getAll();
  }
}
