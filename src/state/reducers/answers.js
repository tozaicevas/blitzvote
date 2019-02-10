import Answer from "../../models/Answer";

const initialState = [
    new Answer(1, 11, "Gynyba kaip niekada svarbi, tačiau dabar turime NATO.", 1),
    new Answer(2, 9, "Valstybės turėtų mokytis iš kitų gerųjų pavyzdžių, tačiau išlaikyti kultūrinį identitetą.", 3),
    new Answer(3, 4, "Taip, nes antros žemės neturime.", 2),
    new Answer(4, 6, "Šiuo metu ne, kol kas ES ekologijos reguliavimas yra vienas griežčiausių pasaulyje.", 2),
    new Answer(5, 6, "Žinoma, greičiau tapsime nepriklasomi nuo iškastinio kuro.", 2)
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
