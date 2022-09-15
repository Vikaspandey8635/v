import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

const ELEMENT_DATA: Element[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [
    'id',
    'image',
    'name',
    // 'email',
    'level',
    'history',
    'pay',
    'earn',
    'money',
    'status',
    'action',
  ];
 
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  listUser:any[];
  recordsLength: number;
  currentPage: number = 1;
  
  pageSize: number = 10;
  search: string = '';

 
  constructor(private auth:AuthService) {
   
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
   
    
    let queryParams = {
      page: this.currentPage,
      limit: this.pageSize,
    };

    if (this.search) {
      queryParams['search'] = this.search;
    }


    this.auth.getRequestWithoutbody('user', queryParams)
    .subscribe((result:any)=>{
      console.log('result',result);
      
      if (result.message === "Fetched successfully") {
        this.recordsLength = result.data.count;
        this.listUser = result.data.data;
        console.log('this.recordsLength',this.recordsLength);  
        
      }
    })
  }

  // getPage(pageNo: any) {
  //   console.log(pageNo,'asdasda');
  //   // this.pageIndex = pageNo.pageIndex;
  //   // this.limit = pageNo.pageSize;

  //   this.currentPage = pageNo.currentPage;
  //   this.pageSize = pageNo.pageSize;


  //   this.getAllUsers();
  // }

  fetchOutputPagination(event: any) {
   
    this.currentPage = event.currentPage;
    this.pageSize = event.pageSize;

    this.getAllUsers();
  }

  
  // searcfetchSearchOutputh(event: any){
  //   console.log("event",event);
  //   this.search = event;
  //   console.log(this.search,'this.search');
    
  //   this.getAllUsers();
  // }

  fetchSearchOutput(event: any) {
    if (event) {
      this.search = event;
      this.getAllUsers();
    } else {
      this.search = '';
      this.getAllUsers();
    }
  }


  onDelete(_id:any){
    this.getAllUsers();
    console.log(_id);
    this.auth.deleteRequest('user',_id).subscribe((result:any)=>{    
      console.log(result);
      this.getAllUsers()
    })
  }
   
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
