import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
})
export class SigupComponent implements OnInit {
  signup: FormGroup;
  //
  constructor() {
    this.signup = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.min(8),
        Validators.max(32),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.min(8),
        Validators.max(32),
        // this.validatePass,
      ]),
    });
  }

  // validatePass() {
  //   if (this.password?.value != null && this.confirmPassword?.value != null) {
  //     if (this.password.value === this.confirmPassword.value) {
  //       return { validatePass: true };
  //     }
  //   }
  //   return null;
  // }

  get signupFormControl() {
    return this.signup.controls;
  }

  get fullName() {
    return this.signup.get('fullName');
  }

  get username() {
    return this.signup.get('username');
  }
  get email() {
    return this.signup.get('email');
  }
  get password() {
    return this.signup.get('password');
  }
  get confirmPassword() {
    return this.signup.get('confirmPassword');
  }

  get passwordError() {
    return this.password?.hasError('required')
      ? 'You must enter a value'
      : this.password?.hasError('min')
      ? 'Password must be at least 8 characters long'
      : this.password?.hasError('max')
      ? 'Password must be at most 32 characters long'
      : '';
  }
  get confirmPasswordError() {
    return this.confirmPassword?.hasError('required')
      ? 'You must enter a value'
      : this.confirmPassword?.hasError('validatePass')
      ? 'Password must be same'
      : '';
  }

  signupSubmit() {
    if (this.signup.invalid) {
      return;
    }
    console.log(this.signup.value);
  }
  ngOnInit(): void {}
}
