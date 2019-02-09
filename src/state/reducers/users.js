import User from "../../models/User";

const initialState = [
    new User(1, true, "Viktor Uspaschik", null, null, 1),
    new User(2, true, "Eugenijus Gentvilas", null, null, 2),
    new User(3, false, "Faustas Butkus", "Fains bicas xD", null, null),
    new User(4, false, "Tomas Zaicevas", "Programuotojas", null, null),
    new User(5, false, "Joris Medeisis", "Nusivyles istorikas", null, null)
];

export default function (state = initialState, action) {
    switch(action.type) {
        case 'USER_INSERT':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}