import { Component } from "@angular/core";

@Component({
  selector: "app-heroes-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  public name: string = "Ironman";
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  protected getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  protected changeHero(): void {
    this.name = "Hulk";
  }
  protected changeAge(): void {
    this.age = 25;
  }
  protected resetForm(): void {
    this.name = "Ironman";
    this.age = 45;
    document.querySelectorAll("h1")!.forEach(e => e.innerHTML = "<h1>Desde angular prron</h1>");
  }
}
