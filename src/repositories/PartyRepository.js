import Party from "../models/Party";

export class PartyRepository {
    static data  = [
        new Party(1, "Lietuvos Respublikos liberalų sąjūdis"),
        new Party(2, "Tėvynės sąjunga - Lietuvos krikščionys demokratai"),
        new Party(3, "Tvarka ir teisingumas"),
        new Party(4, "Lietuvos valstiečių ir žaliųjų sąjunga"),
        new Party(5, "Lietuvos socialdemokratų partija"),
    ];

    getAll() {
        return this.data;
    }

    insert(party) {
        this.data.push(party);
    }
}