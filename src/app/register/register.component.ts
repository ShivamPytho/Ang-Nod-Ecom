import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm: any = FormGroup;

  constructor(protected fb: FormBuilder,) {
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      password: ['']
    })
  }



  ngOnInit(): void {
  }

  onSignUp(){
    console.log("Data::", this.signupForm.value)
  }

}
