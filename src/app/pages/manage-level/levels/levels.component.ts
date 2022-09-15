import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  desc: string;
  levels: string;
  coins: string;
  action: string;
}
const ELEMENT_DATA: Element[] = [
  {
    id: 1,
    image: 'fghdhhdg',
    firstName: 'John',
    lastName: 'Doe',
    desc: 'Lorem lorem',
    levels: '4th',
    coins: '20',
    action: '',
  },
];
@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent implements OnInit {
  displayedColumns = [
    'id',
    'image',
    'firstName',
    'lastName',
    'desc',
    'levels',
    'coins',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');
  }
  constructor() {}

  ngOnInit(): void {}
}
