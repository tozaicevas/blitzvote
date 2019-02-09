import User from "../../models/User";

const initialState = [
    new User(1, true, "Viktor Uspaschik", null, 1),
    new User(2, true, "Eugenijus Gentvilas", null, 2),
    new User(3, false, "Faustas Butkus", null, null),
    new User(4, false, "Tomas Zaicevas", null, null),
    new User(5, false, "Joris Medeisis", null, null)
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