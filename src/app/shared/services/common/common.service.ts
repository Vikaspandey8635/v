import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastr: ToastrService, private router: Router) { }

  showToastr(type: string, message: string) {
    if(type === 'success') {
      this.toastr.success(message);
    } else {
      this.toastr.error(message);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
