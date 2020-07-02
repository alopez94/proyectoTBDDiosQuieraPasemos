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
  queryExitosoArray = false;
  queryExitosoHeader = [];
  mensajeError = '';
  mensajeExito = '';
  mensajeExitoArray = [];

  ngOnInit(): void {


  }

  addviaQuery(sqlquery) {
    console.log(sqlquery);

    this.tableService.addviaQuery(sqlquery)
      .subscribe(
        res => {
          console.error(res);
          // @ts-ignore
          if (Array.isArray(res.message) && res.message.length > 0) {
            //  = res.message;
            // @ts-ignore
            console.log('res.message', res.message);
            this.queryExitosoHeader = [];
            // @ts-ignore
            this.mensajeExitoArray = res.message.map((element, index) => {
              return Object.keys(element).map(key => {
                if (index === 0) {
                  this.queryExitosoHeader.push(key);
                }
                return element[key] ? element[key] : '';
              });
            });
            this.queryExitosoArray = true;
          } else {
            // @ts-ignore
            this.mensajeExito = res.message;
            this.queryExitoso = true;
          }
          console.log('body', this.mensajeExitoArray);
          console.log('header', this.queryExitosoHeader);
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
    setTimeout(() => {
      this.queryExitoso = false;
      this.queryExitosoArray = false;
    }, 5 * 1000);
  }
  mostrarMensajeError() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5 * 1000);
  }
}
