import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: "dbz-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListGenComponent {
  @Input()
  public characterList: Character[] = [{ name: "Trunks", power: 10 }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public onDeleteById(id: string): void {
    this.onDeleteCharacter.emit(id);
  }
}
