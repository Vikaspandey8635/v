import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sidenavWidth = 15;
  profileData: any;
  imageSrc: string = '';

  constructor(
    private common: CommonService,
    private http: AuthService
  ) { }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    this.http.getRequestWithoutbody('profile', {}).subscribe((res: any) => {
        this.profileData = res.data;
        localStorage.setItem('adminProfileData', JSON.stringify(res.data));
        if(res.data.image !== '' && res.data.image !== null) {
          this.imageSrc = res.data.image;
        }
    })
  }

  onLogout() {
    this.common.logout();
  }

}
