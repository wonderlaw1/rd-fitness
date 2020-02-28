import {AbstractControl, ValidatorFn} from '@angular/forms';


export function rangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== undefined && (isNaN(control.value) || control.value < 1 || control.value > 200)) {
    return { range: true };
  }
  return null;
}

export function rangeValidatorParams(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
      return { range: true };
    }
    return null;
  };
}
