import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginsubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form);
  }
}
