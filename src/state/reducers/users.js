import User from "../../models/User";

const initialState = [
    // Noobai
    new User(1, false, "Faustas Butkus", "Fains bicas xD", null, null),
    new User(2, false, "Tomas Zaicevas", "Programuotojas", null, null),
    new User(3, false, "Joris Medeisis", "Nusivylęs istorikas", null, null),
    // Libai
    new User(4, true, "Petras Auštrevičius", null, 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fg1.dcdn.lt%2Fimages%2Fpix%2Fliberalu-sajudzio-frakcijos-nariu-petro-austreviciaus-ir-eugenijaus-gentvilo-63916266.jpg&f=1', 1),
    new User(5, true, "Viktorija Čmilytė-Nielsen", null, 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fg3.dcdn.lt%2Fimages%2Fpix%2F880x550%2Ft22SN928oOA%2Fviktorija-cmilyte-nielsen-75028384.jpg&f=1', 1),
    new User(6, true, "Viktor Uspaschik", null, 'https://s1.15min.lt/images/photos/2009/10/30/original/1256914633viktorasuspaskichas.jpg', 1),
    new User(7, true, "Arūnas Gelūnas", null, 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fs1.15min.lt%2Fstatic%2Fcache%2FODgweDU4MCw1NDh4MjkzLDYxNjIwOSxvcmlnaW5hbCwsMjkyMTEwNjA5OA%3D%3D%2Frezisierius-oskaras-korsunovas-apdovanotas-garbes-zenklu-nesk-savo-sviesa-ir-tikek-50ac9f495c98d.jpg&f=1', 1),
    // Konservai
    new User(9, true, "Masiulis Kęstutis", null, 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fgs.delfi.lt%2Fimages%2Fpix%2Ffile51347981_89a92228.jpg&f=1', 2),
    new User(10, true, "Eugenijus Gentvilas", null, 'https://g3.dcdn.lt/images/pix/eugenijus-gentvilas-76362759.jpg', 2),
    new User(11, true, "Liudas Mažylis", null, 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Falkas.lt%2Fwp-content%2Fuploads%2F2017%2F10%2FLiudas-Ma%C5%BEylis-J.-Petronio-nuotr..jpg&f=1', 2),
    new User(12, true, "Skaistė Gintarė", null, 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-SASlNn-fDd8%2FV6nC0yDZnsI%2FAAAAAAAAJCo%2Fg94T6YpTfI8ojNSqXWJFljdGXtWLkWKcwCLcB%2Fs1600%2FP3300569a.jpg&f=1', 2),
    // Tvarka
    new User(13, true, "Rolandas Paksas", null, 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fg3.dcdn.lt%2Fimages%2Fpix%2Frolandas-paksas-69857070.jpg&f=1', 3),
    // Valstieciai
    new User(14, true, "Bronius Ropė", null, 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.komentaras.lt%2Fwp-content%2Fuploads%2F2014%2F09%2FBronius-Rope-sedintis.jpg&f=1', 4),
    // Socai
    new User(15, true, "Vilija Blinkevičiūtė", null, 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fsirvis.lt%2Fwp-content%2Fuploads%2F2017%2F12%2FV.Blinkeviciute-461x264.jpg&f=1', 5),
    new User(16, true, "Gintautas Paluckas", null, 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fg2.dcdn.lt%2Fimages%2Fpix%2Fgintautas-paluckas-74078288.jpg&f=1', 5),
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
