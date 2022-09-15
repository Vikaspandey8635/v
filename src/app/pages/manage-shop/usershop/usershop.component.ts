import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';

 

@Component({
  selector: 'app-usershop',
  templateUrl: './usershop.component.html',
  styleUrls: ['./usershop.component.scss'],
})
export class UsershopComponent implements OnInit {
  displayedColumns = [
    'id',
    'image',
    'coins',
    'assets',
    'skins',
    'music',
    'action',
  ];
  dataSource = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  currentpage: number = 1;
  shopList:any=[]
  pageIndex: 0;
  userCount:0;
  pageSizeOptions = [5, 10, 25, 100];
  limit: any;
  constructor(private auth: AuthService) {
    this.getAllShops_()
  }

  ngOnInit(): void {}

  getAllShops_(){
    
    this.auth.getRequestWithoutbody('category', {
      // page: this.pageIndex + 1,
      // limit: this.limit,
    } ).subscribe((result:any)=>{
      console.warn(result);
      this.dataSource=result.data.data
       
  })
}
getPage(pageNo: any) {
  this.pageIndex = pageNo.pageIndex;
  this.limit = pageNo.pageSize;
  this.getAllShops_();
}





removed(_id:any){
  console.log(_id);
  this.auth.deleteRequest('category',_id).subscribe((result:any)=>{    
    this.getAllShops_();
    console.log(result);
  })
}




  ngAfterViewInit() {
    // this.dataSource.paginator = thi s.paginator;
    // this.dataSource.sort = this.sort;
    // console.log(this.sort, 'fdgfgfg');
  }
}
