import { FormGroup, Validators } from '@angular/forms';

// If you want to implement class way Validators
// class PasswordChecker extends FormGroup(){}

// By using function way Validators

export function PasswordChecker(
  controlName: string,
  CompareControlName: string
) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[controlName];
    const confPassword = formGroup.controls[CompareControlName];

    if (password.value !== confPassword.value) {
      confPassword.setErrors({ mustmatch: true });
    } else {
      confPassword.setErrors(null);
    }
  };
}
