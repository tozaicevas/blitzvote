import Category from "../../models/Category";

const initialState = [
  new Category(1, "Svietimas", "book", 'orange'),
  new Category(2, "Ekologija", "recycle", 'green'),
  new Category(3, "Saugumas", "shield", 'blue'),
  new Category(4, "Technologijos", "computer", 'teal'),
  new Category(5, "Ekonomika", "money", 'olive')
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "CATEGORY_INSERT":
      return [...state, action.payload];
    default:
      return state;
  }
}
