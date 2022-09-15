import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({ 
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  edituser: FormGroup;

 
  constructor(
    private router:ActivatedRoute, 
    private auth:AuthService, 
    private formBuilder: FormBuilder, 
    private routers:Router,
    private common: CommonService
    ) { 
  this.edituser= this.formBuilder.group({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    ranking: new FormControl('',[Validators.required]),
    earnings: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    levels: new FormControl('',[Validators.required]),
    transactions: new FormControl('',[Validators.required]),
    purchaseHistory: new FormControl('',[Validators.required])
  })
}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.auth.getRequestWithID('user/', this.router.snapshot.params['id']).subscribe((result)=>{
      console.warn("data",result);
     this.edituser.patchValue(result['data']);
    })
  }

  update(){
    if(this.edituser.valid){
      console.log("edit",this.edituser.value);
      this.auth.putRequest('user/'+this.router.snapshot.params['id'],this.edituser.value).subscribe((edit)=>{
        this.edituser.value;
        console.warn(edit);
        this.routers.navigateByUrl("user/userList")
      })
    }
    
  } 

  onFileChange(event:any){
    var file = event.target.files[0];
    var name = file.name.split('.');
    var accept = ['png', 'jpg', 'jpeg'];
    if(accept.includes(name[name.length-1])){
      this.auth.fileUpload(event.target.files[0]).subscribe((Response:any)=>{
       this.edituser.patchValue({
        image:Response['data']
       });
      });
    }else{
      this.common.showToastr(
        'error',
        'Invalid File Format: Only .png, .jpg and .jpeg format allowed!'
      );
    }
  }
  
 
} 
