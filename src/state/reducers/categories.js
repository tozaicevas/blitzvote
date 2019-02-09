import Category from "../../models/Category";

const initialState = [
  new Category(1, "Svietimas", "book"),
  new Category(2, "Ekologija", "recycle"),
  new Category(3, "Saugumas", "shield"),
  new Category(4, "Technologijos", "computer"),
  new Category(5, "Ekonomika", "money")
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "CATEGORY_INSERT":
      return [...state, action.payload];
    default:
      return state;
  }
}
