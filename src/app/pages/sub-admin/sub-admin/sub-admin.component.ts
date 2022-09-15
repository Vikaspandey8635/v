import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  name: string;
  djEntry: string;
  partyorg: string;
  music: string;
  ID: number;
  date: string;
  level: string;
  action: string;
}
const ELEMENT_DATA: Element[] = [
  {
    ID: 1,
    name: 'Ashish',
    djEntry: 'Dukko Party',
    partyorg: 'Johnson Group',
    music: 'demo.mp3',
    date: '09-04-2022, 11:18 PM',
    level: 'Amsterdam',
    action: '',
  },
];

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.scss'],
})
export class SubAdminComponent implements OnInit {
  displayedColumns = [
    'ID',
    'name',
    'djEntry',
    'partyorg',
    'music',
    'date',
    'level',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
