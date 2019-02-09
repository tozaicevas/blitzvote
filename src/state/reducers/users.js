import User from "../../models/User";

const initialState = [
    new User(1, true, "Viktor Uspaschik", null, 'https://s1.15min.lt/images/photos/2009/10/30/original/1256914633viktorasuspaskichas.jpg', 1),
    new User(2, true, "Eugenijus Gentvilas", null, 'https://g3.dcdn.lt/images/pix/eugenijus-gentvilas-76362759.jpg', 2),
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