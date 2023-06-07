import { Character } from "./character.js";

export class Daemon extends Character {
  constructor(name, type, attack = 10, defence = 40) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}
