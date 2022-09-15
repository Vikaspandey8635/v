import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit {

  type :any;
  addShop: FormGroup;


  constructor(private auth: AuthService,private route: ActivatedRoute, private router: Router  ) {
      // this.Submit_shop();
      this.type= this.route.snapshot.paramMap.get("type")

      this.addShop= new FormGroup({

         
        Coins: new FormControl(''),
        Assets: new FormControl(''),
        skins: new FormControl(''),
        Music: new FormControl(''),
        // Coins: new FormControl(''),

      })
   }
  

  

  Submit_shop(){
    
    console.log(this.addShop.value)




    this.auth.postRequestwithoutToken("category",this.addShop.value).subscribe((result)=>{ 
      console.log(result);
    })
    // console.log("category",this.addShop.value);
  // this.auth.putRequest('category/'+this.route.snapshot.params['id'],this.addShop.value).subscribe((shop)=>{
  //   console.warn(shop);
  //   this.router.navigateByUrl('')
  // })
}
  //   this.auth.postRequestwithoutToken("category",)

  ngOnInit(): void {
 
    //   console.warn(this.route.snapshot.params['id'])
    //   this.auth.getRequestWithoutbody('user/'+this.route.snapshot.params['id']).subscribe((result)=> {
    //     console.warn("data",result);
    //    this.addShop.patchValue(result['data']);
    //   });
    }
}
