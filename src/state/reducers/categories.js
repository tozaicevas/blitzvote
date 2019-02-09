import Category from "../../models/Category";

const initialState = [
    new Category(1, "Mokslas"),
    new Category(2, "Saugumas"),
    new Category(3, "Svietimas"),
    new Category(4, "Ekonomika"),
    new Category(5, "Ekologija")
];

export default function (state = initialState, action) {
    switch(action.type) {
        case 'CATEGORY_INSERT': 
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}