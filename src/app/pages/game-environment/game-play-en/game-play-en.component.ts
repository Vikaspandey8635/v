import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  id: number;
  Scenario: string;
  description: string;
  status: string;
  action: string;
}
const ELEMENT_DATA: Element[] = [
  {
    id: 1,
    Scenario: 'fghdhhdg',
    description: 'Lorem Lorem',
    status: 'vfdvf',
    action: '',
  },
];

@Component({
  selector: 'app-game-play-en',
  templateUrl: './game-play-en.component.html',
  styleUrls: ['./game-play-en.component.scss'],
})
export class GamePlayEnComponent implements OnInit {
  displayedColumns = ['id', 'Scenario', 'description', 'status', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');
  }
}
