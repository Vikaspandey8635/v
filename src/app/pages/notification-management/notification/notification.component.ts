import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';




@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})

export class NotificationComponent implements OnInit {
  displayedColumns = ['id', 'User', 'message'];
  dataSource: any;



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  currentpage: number = 1;
  search: string = '';
  limit: number
  pageSize: any;
  pageOfItems: any[];

  constructor(private auth: AuthService) {

    this.search_()

  }

  ngOnInit(): void { }

  search_() {

    var params = 'search=' + this.search + '&page=' + this.currentpage + '&limit=' + this.limit;
    this.auth.getRequest('notification', params).subscribe((response: any) => {
      console.log(response)
      this.dataSource = response.data.data;
    });
}

  onChangePage(pageOfItems: any) {
    console.log(this.pageOfItems = pageOfItems)
    this.pageOfItems = pageOfItems;

    // this.auth.getRequestWithoutbody('notification?search=eee&page=1&limit=10').subscribe((response)=>{
    //   console.log(response);
    // });

  }


  fetchSearchOutput(event: any) {
    console.log("event", event);
    this.search = event;
    this.search_();
  }



  ngAfterViewInit() { }
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   console.log(this.sort, 'fdgfgfg');
  // }
}
