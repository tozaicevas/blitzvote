import Party from "../../models/Party";

const initialState = [
    new Party(1, "Lietuvos Respublikos liberalų sąjūdis", 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.liberalai.lt%2Fcontent%2Fuploads%2F2015%2F03%2FLS-logotipas-2016.jpg&f=1'),
    new Party(2, "Tėvynės sąjunga - Lietuvos krikščionys demokratai", 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.vrk.lt%2Fdocuments%2F10180%2F507291%2FTS_LKD_logo_spalv.jpg%2F655b08dd-3022-48e3-b182-646e9911d07d%3Ft%3D1398194913099&f=1'),
    new Party(3, "Tvarka ir teisingumas", 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.rolandaspaksas.lt%2Fget.php%3Fi.2560&f=1'),
    new Party(4, "Lietuvos valstiečių ir žaliųjų sąjunga", 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3MJoyfC7F0x6SYzoTZd6kwHaIv%26pid%3D15.1&f=1'),
    new Party(5, "Lietuvos socialdemokratų partija", 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Flt%2Fthumb%2F6%2F62%2FLsdp-logo.jpg%2F140px-Lsdp-logo.jpg&f=1')
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
