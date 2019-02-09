import Answer from "../../models/Answer";

const initialState = [
    new Answer(1, 1, "taaaaip", 1),
    new Answer(2, 1, "manau ne, bet gal ir nieko", 3),
    new Answer(3, 2, "hahha, prajuokinai", 2),
    new Answer(4, 2, "krypu krypu", 2),
    new Answer(5, 1, "geras vaizdelis", 2)
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