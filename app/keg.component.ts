import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  outputs: ['onPintPour'],
  template: `
    <div>
      <input *ngIf="keg.isEmpty" type="checkbox" checked (click)="toggleEmpty(false)"/>
      <input *ngIf="!keg.isEmpty" type="checkbox" (click)="toggleEmpty(true)"/>
      <label>{{ keg.name }}</label>

      <h3>{{ keg.name }}</h3>
      <h5>Brewery: {{ keg.brand }}</h5>
      <p>Pints Left: {{ keg.pintsLeft }}</p>
      <p>Price Per Pint: \$\{{ keg.price }}</p>
    </div>
    <div>
      <button (click)="pintPour(keg)">Pour Beer</button>

  `
})

export class KegComponent {
  public keg: Keg;
  public onPintPour: EventEmitter<Keg>;
  constructor() {
    this.onPintPour = new EventEmitter();
  }
  toggleEmpty(setState: boolean) {
    this.keg.isEmpty = setState;
    console.log(this.keg.isEmpty);
  }
  pintPour(keg: Keg) {
    if (keg.pintsLeft > 0) keg.pintsLeft --;
    this.onPintPour.emit(keg);
  }
}
