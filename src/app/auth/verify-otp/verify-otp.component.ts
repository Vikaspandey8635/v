import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';  
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOTPComponent implements OnInit {

  verify_Otp:FormGroup;


  
  constructor(private _authService: AuthService,private router: Router, private common: CommonService ) {



   this.verify_Otp=  new FormGroup({
    key: new FormControl('',[Validators.required,Validators.email]),
    code: new FormControl('',[Validators.required])
  });
 this.verify_Otp.patchValue({key: localStorage.getItem("forgotEmail")})
   }




  submitOtp(){
    if(this.verify_Otp.valid) {
      this._authService
      .postRequestwithoutToken("verifyOtp", this.verify_Otp.value)
      .subscribe(
        (response: any) => {
            this.common.showToastr('success', 'OTP Verified Successfully');
            localStorage.setItem("accessToken", response.data.token);
            localStorage.setItem("adminData", JSON.stringify(response.data));
            this.router.navigateByUrl("/dashboard");
        });
    }
      
  }
  get key() {
    return this.verify_Otp.get('key');
  }
  get code(){
    return this.verify_Otp.get('code')
  }

  ngOnInit(): void {
  }

}