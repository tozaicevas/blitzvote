import Party from "";

export default class User {
  constructor(id, isPolitician, name, photo, partyId) {
    this.id = id;
    this.isPolitician = isPolitician;
    this.name = name;
    this.photo = photo;
    this.partyId = partyId;
  }

  getParty() {
    Party.getAllParties();
  }
}
