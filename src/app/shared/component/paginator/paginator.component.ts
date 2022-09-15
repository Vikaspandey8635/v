import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() recordsLength: number = 1;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;

  @Output() paginationOutput = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  handlePage(event: any) {
    let body = {
      pageSize: event.pageSize,
      currentPage: event.pageIndex + 1,
    };

    this.paginationOutput.emit(body);
  }
}
