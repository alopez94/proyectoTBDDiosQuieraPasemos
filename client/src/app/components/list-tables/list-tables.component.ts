import { Component, OnInit, HostBinding } from '@angular/core';

import { TableServices } from '../../services/table.service';
import { Table } from 'src/app/models/table';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tables: any = [];

  constructor(private tableService: TableServices) { }

  ngOnInit(): void {

  }

  getGames() {
    this.tableService.getTable()
      .subscribe(
        res => {
          this.tables = res;
        },
        err => console.error(err)
      );
  }

}
