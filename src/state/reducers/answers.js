import Answer from "../../models/Answer";

const initialState = [
    new Answer(1, 1, "taaaaip"),
    new Answer(2, 1, "manau ne, bet gal ir nieko"),
    new Answer(3, 2, "hahha, prajuokinai"),
    new Answer(4, 2, "krypu krypu"),
    new Answer(5, 1, "geras vaizdelis")
];

export default function (state = initialState, action) {
    switch(action.type) {
        case 'ANSWER_INSERT': 
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}