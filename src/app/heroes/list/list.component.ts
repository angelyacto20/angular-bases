import { Component } from "@angular/core";

@Component({
  selector: "app-heroes-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Hulk", "IronMan", "Thor"];
  public deletedHero?: string;

  public deleteHeroFromList(): void {
    this.deletedHero= this.heroNames.pop();
  }
}
