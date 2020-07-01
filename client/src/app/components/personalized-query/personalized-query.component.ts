import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table';
import { TableServices } from '../../services/table.service';


@Component({
  selector: 'app-personalized-query',
  templateUrl: './personalized-query.component.html',
  styleUrls: ['./personalized-query.component.css']
})


export class PersonalizedQueryComponent implements OnInit {

  constructor(private tableService: TableServices) { }
  tablesNames: any = [];

  ngOnInit(): void {

    //this.getTableNames();
  }

  addviaQuery(sqlquery: string){
    console.log(sqlquery);
    
    this.tableService.addviaQuery(sqlquery)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }
/*
  getTableNames(){
    this.tableService.GetTablesQueryP().subscribe(
      res => {
        this.tablesNames = res;

      },
      err => console.error(err)

    );


  }*/
}
