import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm: any = FormGroup;

  constructor(protected fb: FormBuilder,protected __service:RegisterService) {
    this.signupForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      type: [2]
    })
  }



  ngOnInit(): void {
  }

  onSignUp(){
    if(this.signupForm.invalid){
      return
    }else{
      console.log("Data::", this.signupForm.value)
      this.__service.registerUser(this.signupForm.value).subscribe(res=>{
        alert("register")
      })
    }
  }

}
