import Party from "../../models/Party";

const initialState = [
    new Party(1, "Lietuvos Respublikos liberalų sąjūdis"),
    new Party(2, "Tėvynės sąjunga - Lietuvos krikščionys demokratai"),
    new Party(3, "Tvarka ir teisingumas"),
    new Party(4, "Lietuvos valstiečių ir žaliųjų sąjunga"),
    new Party(5, "Lietuvos socialdemokratų partija")
];

export default function (state = initialState, action) {
    switch(action.type) {
        case 'PARTY_INSERT': 
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}