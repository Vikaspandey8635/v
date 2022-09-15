import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
  referrals : FormGroup;

  public model = {
    CONTACT_SUPPORT: '',
    LEGAL: '',
    PRIVACY_POLICY: '',
    FAQS: '',
    OUR_MISSION: '',
    EASY_TO_USE: '',
    MEMBERSHIP: '',
    FINCO_APP: '',
    WHERE_DOES_IT_COME_FROM: '',
    GET_START: '',
    OUR_PRICING_PLANS: ''
  };
  staticData: string = '';
  toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ];
  cmsType: any;
  referrals_id:any=[]
  public Editor = ClassicEditor;
  

  
  constructor(
   
    private auth:AuthService,
    private formBuilder: FormBuilder
    ){ 
    this.referrals= this.formBuilder.group({
      receiver_referral_amt: new FormControl('',[Validators.required]),
      sender_referral_amt: new FormControl('',[Validators.required]),
      
    })
  }

  ngOnInit() {
     this.getAllCMS();
     this. getReferral()
    
  }

  update(type:any) {
    this.cmsType = type;
    // var param = {
    //   cmsType: this.constant.CMS[type],
    //   html: this.model[type]
    // }
    // this.https.httpPostWithHeader('addCms', param).subscribe((res: any) => {
    //   if(res.statusCode == 203) {
    //     this.getAllCMS();
    //   }
    // })
  }

  getAllCMS() {
    // this.https.httpPostWithHeader('getAllCMS', '').subscribe((res: any) => {
    //   if (res.statusCode == 200) {
    //     res.data.forEach(element => {
    //       if(element.cmsType === this.constant.CMS.CONTACT_SUPPORT) {
    //         this.model.CONTACT_SUPPORT = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.LEGAL) {
    //         this.model.LEGAL = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.PRIVACY_POLICY) {
    //         this.model.PRIVACY_POLICY = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.FAQS) {
    //         this.model.FAQS = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.OUR_MISSION) {
    //         this.model.OUR_MISSION = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.EASY_TO_USE) {
    //         this.model.EASY_TO_USE = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.MEMBERSHIP) {
    //         this.model.MEMBERSHIP = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.FINCO_APP) {
    //         this.model.FINCO_APP = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.WHERE_DOES_IT_COME_FROM) {
    //         this.model.WHERE_DOES_IT_COME_FROM = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.GET_START) {
    //         this.model.GET_START = element.html;
    //       }
    //       if(element.cmsType === this.constant.CMS.OUR_PRICING_PLANS) {
    //         this.model.OUR_PRICING_PLANS = element.html;
    //       }
    //     });
    //   }
    // })
  }

  getCMS(value:any) {
    this.cmsType = value;


  }

  getReferral()
  {
    this.auth.getRequests('referral')
    .subscribe((result:any)=>{
      console.log('cms result', result);
      this.referrals.patchValue(result['data'])
    })
  }


  submitReferrals(){
    
    if(this.referrals.valid){
      console.log("referrals",this.referrals.value);
      this.auth.putRequest('referral/62fcac2dbf64d797e0ee4c52',this.referrals.value).subscribe((referrals)=>{
        this.referrals.value;
        console.warn("put",referrals);
       
      })
    }
  } 
  
 
}


