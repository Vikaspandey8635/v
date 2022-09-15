import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ManagereferralpopupComponent } from 'src/app/modals/managereferralpopup/managereferralpopup.component';

export interface Element {
  id: number;
  refType: string;
  refname: string;
  reffrename: string;
  refpoint: string;
  reffrepoint: string;
  status: string;
  action: string;
}
const ELEMENT_DATA: Element[] = [
  {
    id: 1,
    refType: 'xyz',
    refname: 'John',
    reffrename: 'Cena',
    refpoint: '50',
    reffrepoint: '50',
    status: 'fgh',
    action: '',
  },
];

@Component({
  selector: 'app-referrals-page',
  templateUrl: './referrals-page.component.html',
  styleUrls: ['./referrals-page.component.scss'],
})
export class ReferralsPageComponent implements OnInit {
  displayedColumns = [
    'id',
    'refType',
    'refname',
    'reffrename',
    'refpoint',
    'reffrepoint',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(ManagereferralpopupComponent, {
      panelClass: 'prm_pop_mn',
    });
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');
  }
}
