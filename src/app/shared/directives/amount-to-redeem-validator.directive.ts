import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAmountToRedeemValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AmountToRedeemValidatorDirective,
    multi: true
  }]
})
export class AmountToRedeemValidatorDirective implements Validator {
  @Input() amount!: number;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value > this.amount) {
      return { 'invalidAmount': this.amount };
    }

    return null;
  }
}
