import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {
  editshop: FormGroup;

  constructor(private auth: AuthService,private  router :ActivatedRoute) {
    // this.editshop= new FormGroup({
    //   coins: new FormControl(''),
    //   assests: new FormControl(''),
    //   cost: new FormControl('')

    // })
   }

  ngOnInit(): void {
    
  }


  
}
  