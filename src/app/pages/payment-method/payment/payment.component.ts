import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  id: number;
  userid: string;
  userName: string;
  date: string;
  paymentMethod: string;
  transID: string;
  extraAmount: string;
  totalAmount: string;
  action: string;
}

export interface Element1 {
  id: number;
  userid: string;
  userName: string;
  date: string;
  totalpayment: string;
  totalJobs: string;
  totalAmount: string;
  leftAmount: string;
  action: string;
}

const ELEMENT_DATA: Element[] = [
  {
    id: 1,
    userid: '#889900',
    userName: 'John',
    date: '09-04-2022, 11:18 PM',
    paymentMethod: 'Ewallet',
    transID: 'N/A',
    extraAmount: 'N/A',
    totalAmount: 'N/A',
    action: '',
  },
];
const ELEMENT_DATA1: Element1[] = [
  {
    id: 1,
    userid: '#889900',
    userName: 'John',
    date: '09-04-2022, 11:18 PM',
    totalpayment: '100',
    totalJobs: '100',
    totalAmount: '234.09 KD',
    leftAmount: 'N/A',
    action: '',
  },
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  displayedColumns = [
    'id',
    'userid',
    'userName',
    'date',
    'paymentMethod',
    'transID',
    'extraAmount',
    'totalAmount',
    'action',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  displayedColumns1 = [
    'id',
    'userid',
    'userName',
    'date',
    'totalpayment',
    'totalJobs',
    'totalAmount',
    'leftAmount',
    'action',
  ];
  dataSource1 = new MatTableDataSource<Element1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');

    this.dataSource1.paginator = this.paginator;
    this.dataSource1.sort = this.sort;
    console.log(this.sort, 'fdgfgfg');
  }
}
