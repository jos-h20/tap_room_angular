import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Drop Top", "Windmere", "5", 124, 0),
      new Keg("Apocalypse IPA", "Ten Barrel", "5", 124, 1),
      new Keg("Blonde Bombshell", "Cascade Lakes", "5", 124, 2),
      new Keg("Mirror Pond", "Deschutes", "5", 124, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  
  }
}
