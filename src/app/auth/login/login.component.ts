import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _authService: AuthService, private router: Router, private common: CommonService) {}

  loginForm = new FormGroup({
    key: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  loginUser() {
    if(this.loginForm.valid) {
      this._authService
      .postRequestwithoutToken('login', this.loginForm.value)
      .subscribe((response: any) => {
          localStorage.setItem('accessToken', response.data.token);
          localStorage.setItem('adminData', JSON.stringify(response.data));
          this.router.navigateByUrl('/dashboard');
          this.common.showToastr('success', response.message);
      });
    }
  }
  get key() {
    return this.loginForm.get('key');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
