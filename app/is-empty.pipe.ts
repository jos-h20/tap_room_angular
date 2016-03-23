import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "isEmpty",
  pure: false
})
export class IsEmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredEmptyState = args[0];

    if(desiredEmptyState === "isEmpty") {
      return input.filter((keg) => {
        return keg.isEmpty;
      });
    } else if(desiredEmptyState === "notEmpty") {
      return input.filter((keg) => {
        return !keg.isEmpty;
      });
    } else {
      return input;
    }
  }
}
