import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // @ViewChild('passwordEle', {static: true}) passwordEle: ElementRef;

  signUpForm: any;
  // passwordElement: any;

  private regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // ngAfterViewInit() {
  //   this.passwordElement = this.passwordEle.nativeElement;
  // }


  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      phoneNumber: ['', [Validators.required, this.phoneNoValidation.bind(this)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidation.bind(this)]],
      // confirmPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm);
    this.router.navigateByUrl("/landingPage")
  }

  phoneNoValidation(control: FormControl) : {[s: string]: boolean}{
    if((control.value).length !=10 && (control.value).length > 0 ){
      return {'phonenumberisInvalid': true};
    }else{
      return null;
    }
  }

  passwordValidation(control: FormControl) : {[s: string]: boolean}{
    if(!this.regularExpression.test(control.value) && (control.value).length >0){
      return {'passwordisInvalid': true};
    }else{
      return null;
    }
  }

  // confirmpasswordValidation(){

  // }
}
