import Question from "../../models/Question";

const initialState = [
    new Question(1, 1, "Ką manote apie bendrą ES kariuomenę?", [2]),
    new Question(2, 1, "Ar jūs už dyzelinių automobilių ribojimą?", [1]),
    new Question(3, 2, "Ar švietimas turi būti suvienodintas tarp valstybių?", [3]),
    new Question(4, 3, "Ar Vengrija nusipelnė ES sankcijų?", [1]),
    new Question(5, 3, "Ar ES turėtų glaudžiau bendradarbiauti su Ukraina?", [2]),
];

export default function (state = initialState, action) {
    switch(action.type) {
        case 'QUESTION_INSERT':
            return [
                ...state,
                action.payload
            ];
        case 'QUESTION_UPDATE':
            const newQuestion = action.payload;
            const withoutOld = state.filter(q => q.id !== newQuestion.id);
            return [
                ...withoutOld,
                newQuestion
            ];
        default:
            return state;
    }
}
