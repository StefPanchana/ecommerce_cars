import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function ValidateCodeCar(): ValidatorFn
{
  return (control: AbstractControl) : ValidationErrors | null => {
    const code = /^\d{4}$/;

    if (code.test(control.value))
    {
      return null;
    }

    return {'codeValidate': true};
  }
}
