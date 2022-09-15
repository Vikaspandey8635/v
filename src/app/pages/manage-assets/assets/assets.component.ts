import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';

export interface Element {
  id: number;
  image: string;
  name: string;
  price: string;
  action: string;
}

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent implements OnInit {
  displayedColumns = ['id', 'image', 'name', 'price', 'action'];
  // dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  dataSource = []

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  assestlist:any=[];
  userCount = 0;
  limit = 5;
  pageSizeOptions = [5, 10, 25, 100];
  pageIndex = 0;
  searchText: any;
  timer: any;
  users: any;
  search: string=" ";

  currentpage: number = 1;


  constructor(private auth:AuthService) {
    this.getAllUsers()
  }

  ngOnInit(): void {}

  getAllUsers(){

    this.auth.getRequestWithoutbody('item', {
      page: this.pageIndex + 1,
      limit: this.limit,
    })
    .subscribe((result:any)=>{
      console.warn(result);
      this.dataSource=result.data.data
 
       
 
      this.userCount=result.data.count
      console.log(this.assestlist,"abc")

      
    })
  }

  getPage(pageNo: any) {
    this.pageIndex = pageNo.pageIndex;
    this.limit = pageNo.pageSize;
    this.getAllUsers();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   console.log(this.sort, 'fdgfgfg');
  // }
}
