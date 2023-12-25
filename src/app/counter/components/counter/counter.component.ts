import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h3>Counter {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent implements OnInit {
  public counter: number = 20;

  public increaseBy(value: number): void {
    this.counter += value;
  }
  
  public reset(): void {
    this.counter = 10;
  }
  constructor() {}

  ngOnInit() {}
}
