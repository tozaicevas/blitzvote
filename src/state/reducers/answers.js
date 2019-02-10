import Answer from "../../models/Answer";

const initialState = [
    new Answer(1, 11, "taaaaip", 1),
    new Answer(2, 4, "manau ne, bet gal ir nieko", 3),
    new Answer(3, 4, "hahha, prajuokinai", 2),
    new Answer(4, 6, "krypu krypu", 2),
    new Answer(5, 6, "geras vaizdelis", 2)
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
