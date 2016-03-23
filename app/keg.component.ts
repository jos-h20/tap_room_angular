import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  outputs: ['onPintPour'],
  template: `
    <div class="display">
      <input *ngIf="keg.isEmpty" type="checkbox" checked (click)="toggleEmpty(false)" class="check"/>
      <input *ngIf="!keg.isEmpty" type="checkbox"  (click)="toggleEmpty(true)" class="check"/>
      <h3>{{ keg.name }}</h3>
      <h5>Brewery: {{ keg.brand }}</h5>
      <p>Pints Left: {{ keg.pintsLeft }}</p>
      <p>Price Per Pint: \$\{{ keg.price }}</p>
      <button (click)="pintPour(keg)" class="btn-primary btn-lg">Pour Beer</button>
    </div>

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
    if (keg.pintsLeft <= 100) keg.isEmpty = true;
    this.onPintPour.emit(keg);
  }

}
