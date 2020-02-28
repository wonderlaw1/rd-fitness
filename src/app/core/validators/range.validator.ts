import {AbstractControl, ValidatorFn} from '@angular/forms';

export function rangeValidator(control: AbstractControl): { range: true } | null {
  if (control.value !== undefined &&
     (isNaN(control.value) || control.value < 1 || control.value > 200)) {
    return { range: true };
  }
  // tslint:disable-next-line
  return null;
}

export function rangeValidatorParam(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { range: true } | null => {
    if (control.value !== undefined &&
      (isNaN(control.value) || control.value < min || control.value > max)) {
      return { range: true };
    }
    // tslint:disable-next-line
    return null;
  };
}
