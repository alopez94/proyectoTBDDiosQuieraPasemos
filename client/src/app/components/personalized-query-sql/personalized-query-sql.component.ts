import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table';
import { TableServices } from '../../services/table.service';


@Component({
  selector: 'app-personalized-query-sql',
  templateUrl: './personalized-query-sql.component.html',
  styleUrls: ['./personalized-query-sql.component.css']
})
export class PersonalizedQuerySQLComponent implements OnInit {

  constructor(private tableService: TableServices) { }
  tablesNames: any = [];

  ngOnInit(): void {
  }
  addviaQuerySQL(sqlquery: string){
    console.log(sqlquery);
    
    this.tableService.addviaQuery(sqlquery)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
