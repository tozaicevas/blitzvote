import Question from "../../models/Question";

const initialState = [
    new Question(1, 4, "Ką manote apie bendrą ES kariuomenę?", [2]),
    new Question(2, 4, "Ar jūs už dyzelinių automobilių ribojimą?", [1]),
    new Question(3, 4, "Ar švietimas turi būti suvienodintas tarp valstybių?", [3]),
    new Question(4, 4, "Ar Vengrija nusipelnė ES sankcijų?", [1]),
    new Question(5, 4, "Kodėl ES negali bendradarbiauti su Rusija?", [2])
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