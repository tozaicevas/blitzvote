import PartyRepository from "../repositories/PartyRepository";

export default class User {
  constructor(id, isPolitician, name, photo, partyId) {
    this.id = id;
    this.isPolitician = isPolitician;
    this.name = name;
    this.photo = photo;
    this.partyId = partyId;
  }

  get party() {
    return PartyRepository.getAllParties().filter(
      party => party.id === this.partyId
    );
  }
}
