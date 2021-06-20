import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: any;

  private regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // ngAfterViewInit() {
  //   this.passwordElement = this.passwordEle.nativeElement;
  // }


  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidation.bind(this)]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signInForm);
    this.router.navigateByUrl("/landingPage")
  }

  passwordValidation(control: FormControl) : {[s: string]: boolean}{
    if(!this.regularExpression.test(control.value) && (control.value).length >0){
      return {'passwordisInvalid': true};
    }else{
      return null;
    }
  }


}
