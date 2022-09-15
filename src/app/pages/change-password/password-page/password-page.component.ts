import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { MustMatch } from 'src/app/shared/validators/must-match.validator';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.scss']
})
export class PasswordPageComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: AuthService, private common: CommonService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: [null, [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      delete this.changePasswordForm.value.confirmPassword;
      this.http
        .postRequest('changePassword', this.changePasswordForm.value)
        .subscribe((res: any) => {
          this.common.showToastr('success', res.message);
          this.common.logout();
        });
    }
  }

}
