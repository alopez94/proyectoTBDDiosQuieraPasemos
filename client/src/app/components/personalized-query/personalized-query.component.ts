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
  error = false;
  queryExitoso = false;
  mensajeError = '';
  mensajeExito = '';
  ngOnInit(): void {


  }

  addviaQuery(sqlquery) {
    console.log(sqlquery);

    this.tableService.addviaQuery(sqlquery)
      .subscribe(
        res => {
          // @ts-ignore
          this.mensajeExito = res.message;
          this.mostrarMensajeExito();
        },
        err => {
          console.error(err);
          this.mensajeError = err.error.sqlMessage;
          this.mostrarMensajeError();
        }
      );
    sqlquery.value = '';


  }
  mostrarMensajeExito() {
    this.queryExitoso = true;
    setTimeout(() => {
      this.queryExitoso = false;
    }, 5 * 1000);
  }
  mostrarMensajeError() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5 * 1000);
  }
}
