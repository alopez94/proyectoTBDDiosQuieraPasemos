import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from '../models/table'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TableServices {


  API_URI = 'http://localhost:3000/api';

  constructor(private https: HttpClient) { }

  getTable(){

    return this.https.get(`${this.API_URI}/table`);

  }

  GetTables(id: string){

    return this.https.get(`${this.API_URI}/table/${id}`);
  }

   deleteTable(id: string){
    return this.https.delete(`${this.API_URI}/table/${id}`);
  }

  saveTable(table: Table){
    return this.https.post(`${this.API_URI}/table`, table);
  }

  addviaQuery(sqlQuery: string){
    return this.https.post(`${this.API_URI}/query`, {query:sqlQuery});
  }

  addviaTableQuery(sqlQueryTableName: any){
    return this.https.post(`${this.API_URI}/TableQuery`, {query:sqlQueryTableName});
  }
  
  GetTablesQueryP(){

    return this.https.get(`${this.API_URI}/tableNames`);
  }


}
