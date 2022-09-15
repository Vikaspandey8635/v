import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from 'src/app/core/services/auth.service';

export interface Element {
  id: number;
  name: string;
  last: string;
  email: string;
  phone: string;
  query: string;
  status: string;
  action: string;
}
const ELEMENT_DATA: Element[] = [
  {
    id: 1,
    name: 'John',
    last: 'Doe',
    email: 'gulfaan@gmail.com',
    phone: '9687462474',
    query: 'lorem lorem',
    status: 'fhdhfh',
    action: '',
  },
];
@Component({
  selector: 'app-leaderbaord',
  templateUrl: './leaderbaord.component.html',
  styleUrls: ['./leaderbaord.component.scss'],
})
export class LeaderbaordComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'last',
    'email',
    'phone',
    'query',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  topLeaderItem:any=[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');
  }

  constructor(private auth:AuthService) {
    this.topLeader();
  }
  topLeader(){
    this.auth.getRequests('topLeaderBoard').subscribe((result:any)=>{
      console.log("topleader",result);
      this.topLeaderItem=result.data;
    })
  }

  ngOnInit(): void {}
}
