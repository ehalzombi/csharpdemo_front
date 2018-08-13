import { FormControl, Validators} from '@angular/forms';

export class OfferValidator extends Validators {
  static validateCharacters(control: FormControl) {
    if (!control.value)
      return true;

    let offer = Number(control.value);

    if (!!offer) {
      return offer >= 0;
    }
  }
}
