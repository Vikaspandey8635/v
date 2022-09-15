import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,   } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

 

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {


  notify: FormGroup;

  constructor(private auth: AuthService, private router: Router) { 

    this.notify= new FormGroup  ({
      notificationType: new FormControl(''),
      tittle: new FormControl(''),
      message: new FormControl(''),
      type: new FormControl('User'),
      // ids: new FormControl([])
      
    })
  }




  submitNotify(){
     console.log(this.notify.value);

     this.auth
    .postRequestwithoutToken("notification", this.notify.value)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigateByUrl("/notification")


  });

  }


  ngOnInit(): void {
    // this.auth.postRequestwithoutToken("notification",).
   

}

}