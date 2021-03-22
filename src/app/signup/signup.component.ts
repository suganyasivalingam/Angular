import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required, Validators.email])
    })
  }

  ngOnInit() {
  }

  showData() {
    console.log(this.signupForm);
  }
}
