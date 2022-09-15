import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router, private common: CommonService) { }

  forgotpass = new FormGroup({
    email: new FormControl('', [Validators.required])
  });

  forgot() {
    if(this.forgotpass.valid) {
      this.authService.postRequestwithoutToken("forgotPassword", this.forgotpass.value).subscribe((response: any) => {
          this.common.showToastr('success', `OTP sent to ${this.forgotpass.value.email} successfully.`);
          localStorage.setItem("forgotEmail",this.forgotpass.value.email)
          this.router.navigateByUrl("/auth/otp");
      },(err:any)=>{
  
        
      })
    }    
  }

  get email() {
    return this.forgotpass.get('email');
  }
  ngOnInit(): void {
  }

}
