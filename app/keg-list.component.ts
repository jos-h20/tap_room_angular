import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { IsEmptyPipe } from './is-empty.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [IsEmptyPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  templateUrl: 'app/keg-list.component.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterEmpty: string = "notEmpty";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {

    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    this.kegList.push(
      new Keg(newKeg.name, newKeg.brand, newKeg.price, newKeg.pintsLeft, this.kegList.length)
    );
  }
  onChangeKeg(filterOption){
    this.filterEmpty = filterOption;
  }

}
