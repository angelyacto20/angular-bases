import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from "uuid";

console.log(uuid());

@Injectable({ providedIn: "root" })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: "Krillin", power: 500 },
    { id: uuid(), name: "Goku", power: 1500 },
    { id: uuid(), name: "Vegeta", power: 1300 },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id != id);
  }
}
