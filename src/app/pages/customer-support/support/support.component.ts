import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  id: number;
  name: string;
  last: string;
  email: string;
  phone: string;
  query: string;
  // status: string;
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
    // status: 'fhdhfh',
    action: '',
  },
];
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'id',
    'name',
    'last',
    'email',
    'phone',
    'query',
    // 'status',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');
  }
}
