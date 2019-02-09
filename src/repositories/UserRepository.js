import User from "../models/User";

export class UserRepository {
  static data  = [
    new User(1, true, "Viktor Uspaschik", null, 1),
    new User(2, true, "Eugenijus Gentvilas", null, 2),
    new User(3, false, "Faustas Butkus", null, null),
    new User(4, false, "Tomas Zaicevas", null, null),
    new User(5, false, "Joris Medeisis", null, null)
  ];

  getAll() {
    return this.data;
  }

  insert(user) {
    this.data.push(user);
  }
}
