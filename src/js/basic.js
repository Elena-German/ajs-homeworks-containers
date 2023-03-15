export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    this.members.add(player);
  }

  // каких задвоений быть не должно? в объект класса Set не добавится значение,
  // которое уже есть в объекте Set по определению. Не понимаю каких задвоений быть не должно?
  addAll(...players) {
    players.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
