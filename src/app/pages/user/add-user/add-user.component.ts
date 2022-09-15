import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  adduser= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    ranking: new FormControl(''),
    earnings: new FormControl(''),
    image: new FormControl(''),
    levels: new FormControl(''),
    transactions: new FormControl(''),
    purchaseHistory: new FormControl('')
  })
  ngOnInit(): void {
  }

  submit(){
    console.log(this.adduser.value);
  

  }

}
