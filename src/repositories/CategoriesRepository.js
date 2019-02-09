import Category from "../models/Category";

export default class CategoryRepository {
  static data = [
    new Category(1, "Mokslas"),
    new Category(2, "Saugumas"),
    new Category(3, "Svietimas"),
    new Category(4, "Ekonomika"),
    new Category(5, "Ekologija")
  ];

  static getAll = () => {
    return CategoryRepository.data;
  };

  static insert = category => {
    CategoryRepository.data.push(category);
  };
}
