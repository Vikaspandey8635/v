import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  adminProfileData: any;
  profileForm: FormGroup;
  submitted = false;

  constructor(private http: AuthService, private common: CommonService) { }

  ngOnInit(): void {
    this.initForm();
    this.getAdminProfileData();
  }

  getAdminProfileData() {
    if(localStorage.getItem('adminProfileData')) {
      this.adminProfileData = JSON.parse(localStorage.getItem('adminProfileData'));
      this.profileForm.patchValue(this.adminProfileData);
    }
  }

  initForm() {
    this.profileForm = new FormGroup({
      // image: new FormControl('', Validators.required),
      image: new FormControl(''),
      name: new FormControl('', Validators.required),
      countryCode: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.profileForm.valid) {
      let body = {
        ...this.profileForm.value,
        image: 'imageURl' // setting image URL manually because there is not API for image upload in swagger at this point.
      }
      this.http.putRequest('updateProfile', body).subscribe((res: any) => {
        localStorage.setItem('adminProfileData', JSON.stringify(res.data));
        this.getAdminProfileData();
        this.common.showToastr('success', res.message);
      });  
    }
  }

  onFileChange(event) {
    var file = event.target.files[0];
    var name = file.name.split('.');
    var accept = ['png', 'jpg', 'jpeg'];
    if (accept.includes(name[name.length - 1])) {
      this.http.fileUpload(event.target.files[0]).subscribe((response: any) => {
        this.profileForm.patchValue({
          image: response['data']
        });
      });
    } else {
      this.common.showToastr(
        'error',
        'Invalid File Format: Only .png, .jpg and .jpeg format allowed!'
      );
    }
  }
}
